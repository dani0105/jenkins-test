FROM node:12-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

expose 8081

CMD [ "node", "index.js" ]