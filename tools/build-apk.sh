#!/usr/bin/env bash
# Builds dist/REDSHIFT.apk without Android Studio / Gradle: aapt2 → javac → d8 → zipalign → apksigner.
#   SERVER_URL=https://내서버.run.app tools/build-apk.sh   (서버 주소를 앱에 박아 넣기 — 생략하면 server.txt / 직접 입력)
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$PWD"; CACHE="$ROOT/tools/cache"; OUT="$ROOT/android/build"; mkdir -p "$CACHE" dist
BT_ZIP=build-tools_r35.0.1_linux.zip; PF_ZIP=platform-35_r02.zip
[ -f "$CACHE/$BT_ZIP" ] || curl -sSfL -o "$CACHE/$BT_ZIP" "https://dl.google.com/android/repository/$BT_ZIP"
[ -f "$CACHE/$PF_ZIP" ] || curl -sSfL -o "$CACHE/$PF_ZIP" "https://dl.google.com/android/repository/$PF_ZIP"
[ -d "$CACHE/bt" ] || unzip -q "$CACHE/$BT_ZIP" -d "$CACHE/bt"
[ -d "$CACHE/pf" ] || unzip -q "$CACHE/$PF_ZIP" -d "$CACHE/pf"
BT="$(ls -d "$CACHE"/bt/*| head -1)"; JAR="$(ls -d "$CACHE"/pf/*/android.jar | head -1)"

npm run build --silent
[ -f android/res/mipmap-xxxhdpi/ic_launcher.png ] || python3 tools/make-icon.py

rm -rf "$OUT"; mkdir -p "$OUT/assets/www" "$OUT/classes" "$OUT/dex"
cp -r public/. "$OUT/assets/www/"
# the app's own config: marks it as the Android app and (optionally) bakes in the server address
cat > "$OUT/assets/www/config.js" <<CFG
window.REDSHIFT_APP = 'android';
window.REDSHIFT_SERVER = '${SERVER_URL:-}';
window.REDSHIFT_DISCOVERY = 'https://raw.githubusercontent.com/hookite-ops/redshift/main/server.txt';
CFG

"$BT/aapt2" compile --dir android/res -o "$OUT/res.zip"
"$BT/aapt2" link -o "$OUT/base.apk" -I "$JAR" --manifest android/AndroidManifest.xml \
  -A "$OUT/assets" --min-sdk-version 24 --target-sdk-version 35 --version-code 42 --version-name 4.2 \
  -0 js -0 html -0 png "$OUT/res.zip"
javac -nowarn -Xlint:-options --release 11 -cp "$JAR" -d "$OUT/classes" $(find android/src -name '*.java')
"$BT/d8" --release --min-api 24 --lib "$JAR" --output "$OUT/dex" $(find "$OUT/classes" -name '*.class')
cp "$OUT/base.apk" "$OUT/unsigned.apk"
(cd "$OUT/dex" && zip -q -j "$OUT/unsigned.apk" classes.dex)
"$BT/zipalign" -p -f 4 "$OUT/unsigned.apk" "$OUT/aligned.apk"

# one fixed signing key so new versions install over old ones (kept in the repo on purpose: hobby app)
KS=android/redshift.keystore
[ -f "$KS" ] || keytool -genkeypair -keystore "$KS" -storepass redshift -keypass redshift -alias redshift \
  -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=REDSHIFT, O=hookite" >/dev/null 2>&1
"$BT/apksigner" sign --ks "$KS" --ks-pass pass:redshift --key-pass pass:redshift --ks-key-alias redshift \
  --out dist/REDSHIFT.apk "$OUT/aligned.apk"
"$BT/apksigner" verify dist/REDSHIFT.apk
rm -f dist/REDSHIFT.apk.idsig
ls -la dist/REDSHIFT.apk
