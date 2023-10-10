FROM node:18-alpine

WORKDIR /server

COPY . .

RUN npm install

CMD [ "npm" ,"start"  ]

EXPOSE 8000
