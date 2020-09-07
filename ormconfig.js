require('dotenv').config()

module.exports = {
   "type": "postgres",
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'db',
   "logging": true,
   "entities": ["dist/**/*.entity{ .ts,.js}"],
   "synchronize": false,
   "migrations": ["dist/migrations/*{.ts,.js}"],
   "migrationsTableName": "migrations_typeorm",
   "migrationsRun": false,
    cli: {
      migrationsDir: 'src/migrations',
      entitiesDir: 'src/'
    }
}
