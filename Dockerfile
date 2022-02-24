# Imagem utilizada para rodar a plicação
FROM node:16-alpine

# Caminho no docker
WORKDIR /usr/app

# Copiando o package para instanciar o node_modules
COPY package.json ./

# Instalando node_modules
RUN yarn

# Copiando os outros arquivos
COPY . .

# Expondo porta para acesso da imagem 
# Obs: a porta deve ser a mesma configurada no arquivo .env
EXPOSE 4000

# Rodando aplicação
CMD ["yarn", "dev"]