FROM node:16

   WORKDIR /app

   COPY *.json ./
   COPY *.js ./
   COPY *.ts ./
   COPY ./src ./src
   COPY ./client ./client
   RUN npm install
   RUN npm run build-client

   EXPOSE 3000

   CMD ["npm", "start"]
