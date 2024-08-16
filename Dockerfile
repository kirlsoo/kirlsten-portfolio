# Use a PHP-FPM based image as a base
FROM php:8.3-fpm-alpine

# Install required packages and SQLite 3.7.7 or higher
RUN apk add --no-cache \
    git \
    curl \
    libzip \
    sqlite-dev \
    sqlite-libs \
    oniguruma-dev \
    autoconf \
    g++ \
    make \
    libzip-dev

# Copy Composer binary from the official Composer Docker image
COPY --from=public.ecr.aws/docker/library/composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP extensions
RUN docker-php-ext-configure pdo_sqlite --with-pdo-sqlite=/usr/local \
    && docker-php-ext-install pdo pdo_sqlite mbstring bcmath zip

# Set working directory
WORKDIR /app

# Use the existing www-data user and group
RUN chown -R www-data:www-data /app
USER www-data

# Copy the entire project before running composer
COPY --chown=www-data:www-data . .

# Install Laravel dependencies as the non-root user
RUN composer install --no-dev --optimize-autoloader

# Revert to root user to change permissions if necessary
USER root

# Expose port for PHP built-in server
EXPOSE 8000

# Define the command to run Laravel's built-in server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
