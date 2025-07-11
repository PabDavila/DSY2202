# Etapa 1: Build de la aplicación
FROM node:20 AS builder

WORKDIR /app

# Copia archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Compila la app en modo producción
RUN npm run build

# Etapa 2: Servidor web (nginx)
FROM nginx:alpine

# Elimina configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia build de Angular desde el builder
COPY --from=builder /app/dist/kyrius-garage /usr/share/nginx/html

# Copia configuración personalizada de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
