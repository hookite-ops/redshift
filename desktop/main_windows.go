//go:build windows

package main

import (
	"os"
	"os/exec"
	"path/filepath"
	"syscall"
	"time"
	"unsafe"

	webview2 "github.com/jchv/go-webview2"
)

var (
	user32            = syscall.NewLazyDLL("user32.dll")
	pMessageBoxW      = user32.NewProc("MessageBoxW")
	pGetWindowLongPtr = user32.NewProc("GetWindowLongPtrW")
	pSetWindowLongPtr = user32.NewProc("SetWindowLongPtrW")
	pGetWindowRect    = user32.NewProc("GetWindowRect")
	pSetWindowPos     = user32.NewProc("SetWindowPos")
	pMonitorFromWnd   = user32.NewProc("MonitorFromWindow")
	pGetMonitorInfo   = user32.NewProc("GetMonitorInfoW")
	pIsZoomed         = user32.NewProc("IsZoomed")
	pShowWindow       = user32.NewProc("ShowWindow")
	pFindWindowW      = user32.NewProc("FindWindowW")
	pSendMessageW     = user32.NewProc("SendMessageW")
)

const (
	gwlStyle        = ^uintptr(15) // -16
	wsCaption       = 0x00C00000
	wsThickFrame    = 0x00040000
	swpNoZOrder     = 0x0004
	swpNoOwnerZ     = 0x0200
	swpFrameChanged = 0x0020
	swMaximize      = 3
	swHide          = 0
	wmSysCommand    = 0x0112
	scRestore       = 0xF120
	scMaximize      = 0xF030
)

type rect struct{ L, T, R, B int32 }
type monitorInfo struct {
	Size          uint32
	Monitor, Work rect
	Flags         uint32
}

func msgBox(text string) {
	t, _ := syscall.UTF16PtrFromString(text)
	c, _ := syscall.UTF16PtrFromString("REDSHIFT")
	pMessageBoxW.Call(0, uintptr(unsafe.Pointer(t)), uintptr(unsafe.Pointer(c)), 0x40)
}

// ---- borderless fullscreen for the game window (the page asks for it through window.rsFullscreen) ----
type fullscreen struct {
	hwnd      uintptr
	on        bool
	style     uintptr
	r         rect
	maximized bool
}

func (f *fullscreen) set(on bool) {
	if on == f.on || f.hwnd == 0 {
		return
	}
	if on {
		z, _, _ := pIsZoomed.Call(f.hwnd)
		f.maximized = z != 0
		if f.maximized {
			pSendMessageW.Call(f.hwnd, wmSysCommand, scRestore, 0)
		}
		f.style, _, _ = pGetWindowLongPtr.Call(f.hwnd, gwlStyle)
		pGetWindowRect.Call(f.hwnd, uintptr(unsafe.Pointer(&f.r)))
		mon, _, _ := pMonitorFromWnd.Call(f.hwnd, 2) // MONITOR_DEFAULTTONEAREST
		mi := monitorInfo{Size: uint32(unsafe.Sizeof(monitorInfo{}))}
		pGetMonitorInfo.Call(mon, uintptr(unsafe.Pointer(&mi)))
		pSetWindowLongPtr.Call(f.hwnd, gwlStyle, f.style&^(wsCaption|wsThickFrame))
		m := mi.Monitor
		pSetWindowPos.Call(f.hwnd, 0, uintptr(m.L), uintptr(m.T), uintptr(m.R-m.L), uintptr(m.B-m.T), swpNoZOrder|swpNoOwnerZ|swpFrameChanged)
	} else {
		pSetWindowLongPtr.Call(f.hwnd, gwlStyle, f.style)
		r := f.r
		pSetWindowPos.Call(f.hwnd, 0, uintptr(r.L), uintptr(r.T), uintptr(r.R-r.L), uintptr(r.B-r.T), swpNoZOrder|swpNoOwnerZ|swpFrameChanged)
		if f.maximized {
			pSendMessageW.Call(f.hwnd, wmSysCommand, scMaximize, 0)
		}
	}
	f.on = on
}

// no WebView2 runtime (rare: very old Windows 10): run the game in Edge's app mode, else the default browser
func fallback(url string) {
	if hwnd, _, _ := pFindWindowW.Call(uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr("webview"))), 0); hwnd != 0 {
		pShowWindow.Call(hwnd, swHide)
	}
	for _, env := range []string{"ProgramFiles(x86)", "ProgramFiles", "LOCALAPPDATA"} {
		edge := filepath.Join(os.Getenv(env), "Microsoft", "Edge", "Application", "msedge.exe")
		if _, err := os.Stat(edge); err == nil {
			cmd := exec.Command(edge, "--app="+url, "--user-data-dir="+filepath.Join(dataDir(), "edge"), "--start-maximized", "--autoplay-policy=no-user-gesture-required")
			if cmd.Run() == nil {
				return
			}
		}
	}
	exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	time.Sleep(2 * time.Second)
	msgBox("REDSHIFT가 브라우저에서 열렸어요.\n게임을 다 하면 이 창의 확인을 눌러 종료하세요.\n\n(창으로 실행하려면 Microsoft Edge WebView2 런타임을 설치해 주세요)")
}

func main() {
	url, err := serve()
	if err != nil {
		msgBox("게임을 시작하지 못했어요: " + err.Error())
		return
	}
	w := webview2.NewWithOptions(webview2.WebViewOptions{
		Debug:     os.Getenv("REDSHIFT_DEBUG") != "",
		AutoFocus: true,
		DataPath:  filepath.Join(dataDir(), "webview"),
		WindowOptions: webview2.WindowOptions{
			Title:  "REDSHIFT",
			Width:  1280,
			Height: 760,
			IconId: 1, // the icon resource go-winres puts in the exe
			Center: true,
		},
	})
	if w == nil {
		fallback(url)
		return
	}
	defer w.Destroy()
	hwnd := uintptr(w.Window())
	full := &fullscreen{hwnd: hwnd}
	// window.rsFullscreen(true | false | null=toggle)
	w.Bind("rsFullscreen", func(on interface{}) bool {
		want := !full.on
		if b, ok := on.(bool); ok {
			want = b
		}
		w.Dispatch(func() { full.set(want) })
		return want
	})
	w.SetSize(1280, 760, webview2.HintNone)
	pShowWindow.Call(hwnd, swMaximize)
	w.Navigate(url)
	w.Run()
}
