#WIN_CMD
#docker run -v %cd%:/app -p 4200:4200 --rm ng-development

#WIN_POWER_SHELL
#docker run -v ${PWD}:/app -p 4200:4200 --rm ng-development

#LINUX
#docker run -v ${PWD}:/app -p 4200:4200 --rm ng-development

#docker image build -t personaldashboard .
#docker container run -it -p 4200:4200 -p 49153:49153 -v %cd%:/usr/src/app --detach --name pdashboard personaldashboard:latest

FROM node:lts-alpine
ENV NG_CLI_ANALYTICS ci
RUN echo "Welcome to personal-dashboard!"
RUN npm install -g @angular/cli@10.0.2
WORKDIR /usr/src/app
EXPOSE 4200 49153
CMD ["sh", "-c", "npm ci && npm start"]
