FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD tail -f /dev/null
