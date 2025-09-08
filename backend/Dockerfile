# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY src/ ./src

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "src/index.js"]