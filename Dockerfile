FROM node:lts-alpine as build-stage

#set working directory
WORKDIR /app

#copy working dir in container
COPY package*.json ./

#install dependencies
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

#copy the build application from the previous state to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./substitute_env_var.sh /docker-entrypoint.d/substitute_env_var.sh
RUN chmod +x /docker-entrypoint.d/substitute_env_var.sh

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
