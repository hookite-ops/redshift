// REDSHIFT for Windows: one .exe that carries the whole game, serves it to itself on 127.0.0.1 and shows it
// in a WebView2 window (the Edge engine built into Windows 10/11). Multiplayer goes to the same server the
// web version uses, so PC app, browser and phone players all meet in the same rooms.
package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

//go:embed www
var site embed.FS

// set at build time: -ldflags "-X main.serverURL=https://..."
var serverURL = ""
var version = "4.0"

const discovery = "https://raw.githubusercontent.com/hookite-ops/redshift/main/server.txt"

// ---- the local web server ----
func serve() (string, error) {
	www, _ := fs.Sub(site, "www")
	files := http.FileServer(http.FS(www))
	cfg := fmt.Sprintf("window.REDSHIFT_APP = 'exe';\nwindow.REDSHIFT_SERVER = %q;\nwindow.REDSHIFT_DISCOVERY = %q;\nwindow.REDSHIFT_VERSION = %q;\n", serverURL, discovery, version)
	mux := http.NewServeMux()
	mux.HandleFunc("/config.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/javascript; charset=utf-8")
		w.Header().Set("Cache-Control", "no-store")
		w.Write([]byte(cfg))
	})
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "no-cache")
		if strings.HasSuffix(r.URL.Path, ".js") {
			w.Header().Set("Content-Type", "text/javascript; charset=utf-8")
		}
		files.ServeHTTP(w, r)
	})
	// a fixed port keeps the page's origin (and so your settings / records) the same every launch
	var ln net.Listener
	var err error
	for p := 47613; p < 47623; p++ {
		if ln, err = net.Listen("tcp", fmt.Sprintf("127.0.0.1:%d", p)); err == nil {
			break
		}
	}
	if ln == nil {
		if ln, err = net.Listen("tcp", "127.0.0.1:0"); err != nil {
			return "", err
		}
	}
	go http.Serve(ln, mux)
	return "http://" + ln.Addr().String() + "/index.html", nil
}

func dataDir() string {
	base := os.Getenv("LOCALAPPDATA")
	if base == "" {
		base = os.Getenv("APPDATA")
	}
	if base == "" {
		base = os.TempDir()
	}
	d := filepath.Join(base, "REDSHIFT")
	os.MkdirAll(d, 0o755)
	return d
}
