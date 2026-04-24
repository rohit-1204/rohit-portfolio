# Stage 1: Build Angular app
FROM node:18 AS build

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone repo
RUN git clone https://github.com/rohit-1204/rohit-portfolio.git .

RUN npm install
RUN npm run build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/rohit-portfolio /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]