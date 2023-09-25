# Use a imagem oficial do Node.js 18 como base
FROM node:18

# Defina o diretório de trabalho dentro da imagem
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para a imagem
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie todos os arquivos do diretório atual (onde está o seu projeto) para a imagem
COPY . .

# Execute o comando de build do seu projeto (se necessário)
RUN npm run build

# Exponha a porta que seu aplicativo estará ouvindo (caso necessário)
EXPOSE 3000

# Comando para iniciar o seu aplicativo Node.js
CMD ["npm", "run", "start"]

