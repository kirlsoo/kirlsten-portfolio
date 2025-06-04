FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

RUN apk add --no-cache --update \
    git \
    curl \
    libzip-dev \
    unzip \
    nodejs \
    npm

RUN docker-php-ext-install pdo pdo_mysql zip pcntl

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

COPY . .

RUN composer install --optimize-autoloader --no-dev

RUN php artisan key:generate

RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 9000

CMD ["php-fpm", "-F"]
