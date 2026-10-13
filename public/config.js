// 멀티플레이 서버 설정
// - 웹(Cloud Run)에서는 비워 두면 지금 열린 사이트가 곧 서버예요.
// - 앱(APK/EXE)은 아래 순서로 서버를 찾아요: 직접 입력한 주소 → REDSHIFT_SERVER → GitHub의 server.txt
window.REDSHIFT_SERVER = window.REDSHIFT_SERVER || '';
window.REDSHIFT_DISCOVERY = window.REDSHIFT_DISCOVERY || 'https://raw.githubusercontent.com/hookite-ops/redshift/main/server.txt';
