FROM node:10.0.0

RUN mkdir -p /srv/app/services

WORKDIR /srv/app/services

COPY package.json ./srv/app/services
COPY yarn.lock ./srv/app/services

RUN yarn

COPY . /srv/app/services

CMD ["yarn", "dev"]