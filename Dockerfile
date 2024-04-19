FROM node:20.12.2-alpine3.19

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install -g pnpm
RUN pnpm install

COPY . /usr/src/app

RUN touch .env

EXPOSE 3000
CMD ["pnpm", "start"]