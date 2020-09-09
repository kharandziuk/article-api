require('dotenv').config()

module.exports = {
   "type": "postgres",
    host: process.env.DB_HOST || process.env.RDS_HOSTNAME || 'localhost',
    port: process.env.DB_PORT || process.env.RDS_PORT || 5432,
    username: process.env.DB_USERNAME || process.env.RDS_USERNAME || 'user',
    password: process.env.DB_PASSWORD || process.env.RDS_PASSWORD || 'password',
    database: process.env.DB_NAME || process.env.RDS_DB_NAME || 'db',
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
