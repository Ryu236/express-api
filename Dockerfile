FROM node:12-slim

# Create application directory
WORKDIR /usr/src/app

# Install dependencies of application
# Copy package.json and package-lock.json used by wildcard.
COPY package*.json ./

RUN npm install

# Bundle application sources.
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
