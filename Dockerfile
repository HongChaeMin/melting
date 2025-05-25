FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm rebuild --arch=x64 --platform=linux --libc=musl sharp

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
