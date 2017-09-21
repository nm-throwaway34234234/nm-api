# Northwestern API Project

> A project for browsing and searching themoviedb.org API. A hosted version can be viewed at http://198.199.71.114:8000/

## Technologies used
	- Vue.JS for frontend
	- Express.js backend for wrapping themoviedb.org API
	- Docker for running a more produciton ready version
	- Nginx for serving minified version and proxying requests to express server

## Running with Docker
``` bash
# build image with Docker Compose
docker-compose build

# run the image at http://localhost:8000
docker-compose up
```

## Running locally with node
``` bash
# install server dependencies
cd server && npm install

# run express.js server that will be serving the api
cd .. && node server/server.js &

# install frontend dependencies
npm install

# serve frontend with hot reload at http://localhost:8080
npm run dev

# build for production with minification
npm run build
```
