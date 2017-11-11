# docker run -it --rm `
#  -v /f/Coding/docker-node-mongo-app/node:/src `
#  -p 3000:3000 `
#  --network my-network `
#  -w /src `
#  node:8.9.1 npm start

FROM node:8.9.1

ENV NODE_ENV=production

LABEL maintainer="Omri Luzon"

COPY . /var/www
WORKDIR /var/www

VOLUME ["/var/www"]

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]