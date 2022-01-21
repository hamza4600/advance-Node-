FROM node:10-alpine
#  creata directory for app 
WORKDIR F:\nodeProjects\jsontoken
COPY package*.json ./

RUN npm install
#  Bundle app source code 
COPY . .
#  app expose to port 8080
EXPOSE 8080

#  in last we define runtime  like node app.js
CMD [ "node", "index.js" ]