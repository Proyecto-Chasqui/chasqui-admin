FROM node:12.18.3-alpine as front

WORKDIR /app/

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=front /app/build /usr/share/nginx/html
EXPOSE 80
