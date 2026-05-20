## Hello, Better Dev

- Hey, I'm learning devops, more of sh, docker, k8s, networking and some stuff

# Basic docker commands
- [ ] docker ps (to check running containers)
- [ ] docker ps -a (to check all containers along with stop containers)
- [ ] docker stop (to stop a container)
- [ ] docker start (to start an existing container)
- [ ] docker run ---- (to create and start a container)
- [ ] docker exec -it ---- /bin/bash (to go inside a container interactively)
- [ ] docker images (to check all the built images in your system)
- [ ] docker run -d -p 3000:3000 --name ---- -image-x-name- (to run a locally built image)
- [ ] docker logs -f ---xx-x-



- ----, --x-x-, --image-name indicates docker container name 


# Commands to run an nginx server w/ html files w/ conf

- [ ] docker run -d --name example-nginx -p 8080:80 nginx 
- [ ] docker cp public/. example-nginx:/usr/share/nginx/html
- [ ] docker cp example-nginx:/etc/nginx/conf.d/default.conf ./default.conf
- [ ] vim ./default.conf
- [ ] docker cp ./default.conf example-nginx:/etc/nginx/conf.d/default.conf
- [ ] docker exec jar-crm-fe-prod nginx -s reload


# Commands to run a nextjs server

- [ ] vim Dockerfile - (
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start"]
)
- [ ] docker build -t --x-x- .
- [ ] docker images
- [ ] docker run -d -p 3000:3000 --name --x-x- --image-x-name-x-



