# 1. Use a lightweight version of Node.js
FROM node:18-alpine

# 2. Create a working directory inside the container
WORKDIR /app

# 3. Copy only the package.json first (this makes building faster)
COPY package.json ./

# 4. Install the dependencies (Express, Axios, CORS, etc.)
RUN npm install

# 5. Copy the rest of your project files into the container
COPY . .

# 6. Expose the port your server runs on
EXPOSE 3000

# 7. The command to start your app
CMD ["npm", "start"]