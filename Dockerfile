# REDSHIFT — 게임 파일 + 멀티플레이 서버(WebSocket)를 Node로 한 번에 (Cloud Run, 포트 8080)
FROM node:22-alpine
WORKDIR /app
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev
COPY server/index.js server/auth.js ./server/
COPY public ./public
ENV PORT=8080 NODE_ENV=production
EXPOSE 8080
CMD ["node", "server/index.js"]
