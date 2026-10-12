# REDSHIFT — 정적 웹게임을 nginx로 서빙 (Cloud Run, 포트 8080)
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html
EXPOSE 8080
