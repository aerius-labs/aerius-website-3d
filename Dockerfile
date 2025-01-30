# Use Node.js as the base image
FROM node:18.17.0-alpine

RUN apk add g++ make py3-pip linux-headers eudev

# Set the working directory in the container
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

# Build the Next app
RUN pnpm build

# Serve the production build
CMD ["pnpm", "start"]