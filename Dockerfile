FROM node:latest

RUN npm install -g simple-git

ENV NODE_PATH=/usr/local/lib/node_modules

# expect a file named wait.js to be mounted at /usr/src/app

# COPY wait.js /usr/src/app

CMD ["node", "wait.js"]
