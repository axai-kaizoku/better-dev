## Hello, Better Dev

- Hey, I'm learning devops, more of sh, docker, k8s, networking and some stuff

# Basic docker commands
- [ ] docker ps (to check running containers)
- [ ] docker ps -a (to check all containers along with stop containers)
- [ ] docker stop (to stop a container)
- [ ] docker start (to start an existing container)
- [ ] docker run ---- (to create and start a container)
- [ ] docker exec -it ---- /bin/bash

- ---- indicates docker container name 


# Commands to run an nginx server w/ html files w/ conf

- [ ] docker run -d --name example-nginx -p 8080:80 nginx 
- [ ] docker cp public/. example-nginx:/usr/share/nginx/html
- [ ] docker cp example-nginx:/etc/nginx/conf.d/default.conf ./default.conf
- [ ] vim ./default.conf
- [ ] docker cp ./default.conf example-nginx:/etc/nginx/conf.d/default.conf
- [ ] docker exec jar-crm-fe-prod nginx -s reload
