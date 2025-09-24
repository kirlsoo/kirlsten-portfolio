# Name of your PHP container
PHP_CONTAINER=kirlsten-portfolio-laravel.test-1

# Default target
.DEFAULT_GOAL := help

## Open bash shell inside PHP container
bash:
	docker exec -it $(PHP_CONTAINER) bash

## Run Artisan commands (e.g. make artisan c="migrate")
artisan:
	docker exec -it $(PHP_CONTAINER) php artisan $(c)

## Run Composer commands (e.g. make composer c="install")
composer:
	docker exec -it $(PHP_CONTAINER) composer $(c)

## Tail Laravel logs
logs:
	docker exec -it $(PHP_CONTAINER) tail -f storage/logs/laravel.log

## Run tests
test:
	docker exec -it $(PHP_CONTAINER) php artisan test

## Show available make commands
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
