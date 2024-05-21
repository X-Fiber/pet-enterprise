FROM node:18-alpine
WORKDIR /app


ENV BACKEND_PORT=11000
ENV NODE_ENV development

COPY ./web-server/dist ./
COPY ./web-server/configs ./configs
COPY ./web-server/package*.json ./

RUN npm install

EXPOSE $BACKEND_PORT


CMD ["npm", "start"]

