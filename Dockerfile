FROM node:18

WORKDIR /app

RUN git clone https://github.com/Erysilva98/Painel_Microsoft.git

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

