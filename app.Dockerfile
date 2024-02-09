FROM php:7.4-apache

# Copiar archivos de la aplicación al contenedor
COPY ./www /var/www/html

# Instalar extensiones y dependencias si es necesario
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Exponer el puerto 80 para el servidor web Apache
EXPOSE 80

# Comando para iniciar el servidor web
CMD ["apache2-foreground"]