#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker could not be found. Please install Docker and try again."
    exit
fi

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo "Docker is not running. Please start Docker and try again."
    exit
fi

# Build the Docker image
docker build -t trvlro-frontend .

# Check if the container is already running
if docker ps -a | grep trvlro-frontend >/dev/null; then
    # Stop the container
    docker stop trvlro-frontend
    docker rm trvlro-frontend
fi

# Run the Docker container with port mapping
docker run -p 3000:3000 --name trvlro-frontend trvlro-frontend 
