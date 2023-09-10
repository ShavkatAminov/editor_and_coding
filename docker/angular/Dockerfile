FROM node:18


WORKDIR /frontend

COPY frontend/. .
COPY .env .

RUN npm install -g @angular/cli

RUN npm install

CMD [ "ng", "serve" ]

EXPOSE 4200
