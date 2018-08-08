# PWA-Server

### Overview
* Local Configuration
	* Node Applicaiton
* Dockerization
* Express
* Environment Variables

### Local Configuration

#### Node Application: Packages
* Node v10: A link to stackoverflow how to toggle/install latest node [here](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js)
* NPM v6
* Nodemon
* Express
* Request
* Websockets
* Socket.io

#### Node Application: Dev Dependencies
* Standard
* Snazzy

#### Installation: Yarn
```bash
yarn install
```
#### Clone Client Repo
Make sure you clone client repo to the same folder the server repo is in and do not rename the repo. 
The npm copy script is dependent on this.
```bash
//TODO: Add repo link
```

#### Run locally in browser
```bash
yarn run dev
```

#### Documentation
Using JSDoc
```bash
yarn run jsdoc
```

#### Updating submodule pwa-client
If updates are pushed to the child repo you can pull and commit the updates
```bash
git pull
git submodule sync --recursive
git submodule update --init --recursive
```

If you need to pull updates from the remote branch
```bash
git submodule update --remote
```

#### Dockerization
Presume Docker is installed. [How to for MacOS](https://docs.docker.com/docker-for-mac/install/)
Docker Container created, source configurable in Dockerfile.

Build the image(s)
```bash
docker-compose build
```

Start the development server
```bash
docker-compose up
```

[Kitematic](https://kitematic.com/) helps show what docker images are running and allows UI to start/stop them.

#### Deploying docker image to Heroku
```bash
# Login
heroku login
heroku container:login

# Build and push
heroku container:push web
heroku container:release web
```

* When updating the client app keep in mind you will need to pull the submodule updates from the remote repo before deploying

### Express
* Version 4.16.3
* [Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)

### Environment Variables
Copy .env.example and save as .env
This is where environment variables will be setup.
