FROM node:15

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

expose 8081

CMD [ "node", "index.js" ]


