###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

# Create app directory
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine As production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY --from=development /usr/src/app/dist ./dist

COPY --from=development /usr/src/app/package.json .

CMD [ "node", "dist/main","npm run migration:run"]
