up:
	docker compose up -d

down:
	docker compose down

shell:
	docker compose exec dev sh

rebuild:
	docker compose down --rmi all --volumes --remove-orphans
	docker compose up --build -d
