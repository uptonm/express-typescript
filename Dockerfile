FROM node:10

COPY package*.json ./

EXPOSE 27017

RUN npm install

COPY ./ ./

CMD ["node", "./build"]