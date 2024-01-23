## dev

1. Clone the .env.template file and create .env file.
2. Run commad:

```
docker compose up -d

```

3. Install prisma ORM

```
(view documentation https://www.prisma.io/docs/getting-started/quickstart)

```

4. Create the schema on to schema.prisma file

5. Add the next script into package.json file.

```
"prisma:migrate:prod": "prisma migrate deploy"

```

6. Run commad: to start the migrations

```
npm run prisma:migrate:prod

```
