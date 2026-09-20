FROM node:24-alpine

RUN apk add --no-cache bash && npm install -g pnpm@11.25.0

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile && pnpm build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
