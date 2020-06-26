Steps

1 - install knex, express, sqlite3
2 - change the scripts on package.json
3 - npx knex init - init knex with your configurations
4 - create root file from database folder
5 - run: npx knex migrate:make 00_create_table_users
6 - create the migration files
7 - run migration: npx knex migrate:latest
8 - create seed: npx knex seed:make 001_users
9 - Change the seed file (table name, columns, etc)
10 - run seed: npx knex seed:run
11 - use knex on server route methods
12 - create routes file, controller file...
13 - create methods of crud

14 - npx knex seed:run --specific 002_projects.js
