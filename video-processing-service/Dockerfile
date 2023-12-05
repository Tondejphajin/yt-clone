FROM node:18 as builder

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

FROM node:18

RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /app

COPY package*.json .

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "npm","run","serve" ]