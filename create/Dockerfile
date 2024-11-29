# Usa a imagem oficial do Node.js como base
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e instala as dependências
COPY package*.json .

# Instala todas as dependências, incluindo devDependencies para compilar o TypeScript
RUN npm install --legacy-peer-deps

# Copia o restante do código para o container
COPY . .

# Compila o código TypeScript para JavaScript
RUN npm run build 

# Expõe a porta do serviço
EXPOSE 3001

# Inicia o serviço com o código JavaScript compilado
CMD ["node", "dist/index.js"]