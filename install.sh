#!/bin/bash

echo "🚀 Updating system..."
sudo apt update -y && sudo apt upgrade -y

echo "🐳 Installing Docker..."
sudo apt install -y docker.io

echo "▶️ Starting Docker..."
sudo systemctl start docker
sudo systemctl enable docker

echo "👤 Adding ubuntu user to docker group..."
sudo usermod -aG docker ubuntu

echo "🌐 Installing Nginx..."
sudo apt install -y nginx

echo "▶️ Starting Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

echo "✅ Installation complete!"

echo "📌 Versions:"
docker --version
nginx -v
