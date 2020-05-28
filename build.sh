#!/bin/bash

# Docker build
docker build -t ts .

# Docker run
docker run -p 3000:3000 -v ~/github/express-api:/usr/src/app --name ts ts
