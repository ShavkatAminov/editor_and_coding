FROM node:18


WORKDIR /var/www

COPY frontend/. .

RUN npm install -g @angular/cli

RUN npm install


CMD [ "ng", "serve", "--host=0.0.0.0" ]

EXPOSE 4200
