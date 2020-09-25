require('dotenv').config()

module.exports = {
   "type": "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
