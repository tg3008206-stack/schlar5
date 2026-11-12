# syntax=docker/dockerfile:1
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Set demo environment variables by default
ENV NODE_ENV=production
ENV PORT=3000
ENV JWT_SECRET=eduplus_demo_super_secret_jwt_key_2025_prod
ENV MONGO_URI=mongodb://localhost:27017/eduplus
ENV VITE_API_URL=/api

# Copy package manifests
COPY package.json package-lock.json* ./

# Install all dependencies needed for build
RUN npm install

# Copy application source code
COPY . .

# Build frontend production bundle (outputs to /app/dist)
RUN npm run build

# Expose server port
EXPOSE 3000

# Start production server
CMD ["node", "server.ts"]
