
#Docker container for client running webpack
#Notes from @comaMocha team:
#Why Docker? https://www.quora.com/Why-is-Docker-so-hot-right-now
#Steps followed:
#http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html
#TO RUN: 1) Install Docker 2) "In terminal run" docker-compose build 3)"then" docker-compose up


FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5


ENV HOME=/home/app


#copy package.json and npm-shrinkwrap
COPY package.json npm-shrinkwrap.json $HOME/what-to-do-docker/
RUN chown -R app:app $HOME/*

#Use user "app" instead of root and run npm install
USER app
WORKDIR $HOME/what-to-do-docker

#Copy current working files to docker container
COPY  . $HOME/what-to-do-docker/
RUN npm install
#Allow user to be able to see port 3000 which lives in container
EXPOSE 3000

#Run webpack with npm start
CMD ["npm", "run", "runserver"]



