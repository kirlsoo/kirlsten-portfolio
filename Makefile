HTTPD_CONTAINER = kirlsten_portfolio_httpd
PHP_CONTAINER = kirlsten_portfolio_php
REQUIREMENTS = docker docker-compose vi npm node
check:
	$(foreach REQUIREMENT, $(REQUIREMENTS), \
		$(if $(shell command -v $(REQUIREMENT) 2> /dev/null), \
			$(info `$(REQUIREMENT)` has been found. OK!), \
			$(error Please install `$(REQUIREMENT)` before running setup.) \
		) \
	)
setup: check
	cp ./.env.local ./.env
	cp docker-compose.dev.yml docker-compose.override.yml
	vi ./.env
	vi docker-compose.override.yml
	docker-compose up -d --build
	docker exec $(HTTPD_CONTAINER) chmod -R 777 /var/www/kirlsten-portfolio/storage
	docker exec $(PHP_CONTAINER) composer install --prefer-dist
	docker exec $(PHP_CONTAINER) php artisan key:generate
	make clear-cache
clear-cache:
	docker exec ${PHP_CONTAINER} php artisan optimize:clear
	docker exec ${PHP_CONTAINER} php artisan optimize
	docker exec ${PHP_CONTAINER} php artisan cache:clear
	docker exec ${PHP_CONTAINER} php artisan config:clear
	docker exec ${PHP_CONTAINER} php artisan route:clear
	docker exec ${PHP_CONTAINER} php artisan view:clear
migrate:
	docker exec ${PHP_CONTAINER} php artisan migrate
seed:
	docker exec ${PHP_CONTAINER} php artisan db:seed --class=DatabaseSeeder
update-setup:
	cp docker-compose.dev.yml docker-compose.override.yml
	docker-compose up -d --build
remove-setup:
	docker-compose down
setup-tables:
	docker exec $(PHP_CONTAINER) php artisan migrate:fresh --seed
setup-test-tables:
	docker exec $(PHP_CONTAINER) php artisan migrate:fresh --env=testing
check-code:
	make check-cs
	make check-stan
	make check-md
check-cs:
	docker exec $(PHP_CONTAINER) composer cs-check-code
check-stan:
	docker exec $(PHP_CONTAINER) composer phpstan
check-md:
	docker exec $(PHP_CONTAINER) composer md
fix-code-standard:
	docker exec $(PHP_CONTAINER) vendor/bin/phpcbf --standard=PSR12 app/
bash:
	docker exec -it $(PHP_CONTAINER) bash
test-feature:
	docker exec -it $(PHP_CONTAINER) php artisan test --testsuite=Feature
test-unit:
	docker exec -it $(PHP_CONTAINER) php artisan test --testsuite=Unit
test-all:
	docker exec -it $(PHP_CONTAINER) php artisan test
