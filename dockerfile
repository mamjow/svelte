# Use the official Node.js image as the base image
FROM node as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY /my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./my-app/ .

# Build the SvelteKit app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 4173:4173

# Command to run the app
CMD ["npm", "run", "preview"]


