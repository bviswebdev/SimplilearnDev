FROM node:lts as node
WORKDIR /angular/app
RUN git clone https://github.com/bviswebdev/AngularDocker.git /angular/app
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /angular/app/dist/angular-docker-app /usr/share/nginx/html

