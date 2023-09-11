# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "behind-asteroids.zip", "./"]
RUN npm install
COPY . .
RUN npm install serve --global
CMD ["serve"]