FROM node:12

WORKDIR /ildar/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "dist/main"]