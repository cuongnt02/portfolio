FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:22-alpine AS dev-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM dev-deps AS build
WORKDIR /app
COPY . .
RUN npm run build

FROM node:22-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM dev AS debug
RUN npm install -g react-devtools
ENV NODE_ENV=development
ENV VITE_DEBUG=true
EXPOSE 5173 9229
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM dev-deps AS test
WORKDIR /app
COPY . .
ENV NODE_ENV=test
CMD ["npm", "run", "test"]

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off"]



