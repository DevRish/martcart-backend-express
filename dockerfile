FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./tsconfig.json ./
# COPY ~/.aws/credentials ~/.aws/credentials # TODO
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]
