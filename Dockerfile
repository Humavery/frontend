FROM oven/bun:canary AS builder

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile
COPY . .

RUN bun run build

FROM oven/bun:canary-slim AS runner

LABEL org.opencontainers.image.title="@humavery/frontend" \
      org.opencontainers.image.description="A website for Humavery project. Includes landing page & dashboard for both B2C and B2B clients." \
      org.opencontainers.image.version="0.0.1" \
      org.opencontainers.image.authors="Humavery <contact@humavery.com>" \
      org.opencontainers.image.licenses="MIT" \
      org.opencontainers.image.url="https://github.com/Humavery/frontend" \
      org.opencontainers.image.documentation="https://humavery.com/resources/docs" \
      org.opencontainers.image.source="https://github.com/Humavery/frontend.git"

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock

EXPOSE 3000
CMD ["bun", "run", "start"]
