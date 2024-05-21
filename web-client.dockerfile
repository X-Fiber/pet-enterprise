FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY ./web-client/.next ./.next
COPY ./web-client/node_modules ./node_modules
COPY ./web-client/package.json ./package.json

ENV PORT 11001
ENV HOSTNAME="0.0.0.0"

EXPOSE 11001

CMD  ["npm", "start"]