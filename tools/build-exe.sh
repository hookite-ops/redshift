#!/usr/bin/env bash
# Builds dist/REDSHIFT.exe (Windows 10/11, 64-bit) from Linux/macOS with plain Go — no CGO, no Windows needed.
#   SERVER_URL=https://내서버.run.app tools/build-exe.sh   (서버 주소를 앱에 박아 넣기 — 생략하면 server.txt / 직접 입력)
set -euo pipefail
cd "$(dirname "$0")/.."
command -v go >/dev/null || { echo "Go가 필요해요: https://go.dev/dl/"; exit 1; }
mkdir -p dist
npm run build --silent
[ -f desktop/icon.png ] || python3 tools/make-icon.py
rm -rf desktop/www && mkdir -p desktop/www && cp -r public/. desktop/www/ && rm -f desktop/www/config.js
cd desktop
# icon + version info + DPI-aware manifest → rsrc_windows_amd64.syso (picked up by go build automatically)
go run github.com/tc-hib/go-winres@v0.3.3 make --in winres.json --arch amd64
GOOS=windows GOARCH=amd64 CGO_ENABLED=0 go build -trimpath \
  -ldflags "-H windowsgui -s -w -X main.serverURL=${SERVER_URL:-}" -o ../dist/REDSHIFT.exe .
ls -la ../dist/REDSHIFT.exe
