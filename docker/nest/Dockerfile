FROM node:18


WORKDIR /app

COPY backend/. .
COPY .env .

RUN npm install


RUN npm run build

CMD [ "npm", "run", "start:dev" ]
