FROM node:8 AS base

WORKDIR /usr/src/client
RUN mkdir server

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS release

WORKDIR /usr/src/app
COPY --from=base /usr/src/client/dist ./dist
RUN mkdir server

WORKDIR /usr/src/app/server
COPY ./server .
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]