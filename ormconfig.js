require('dotenv').config()

module.exports = {
   "type": "postgres",
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_NAME,
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
