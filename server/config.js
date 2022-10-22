const env = process.env;

const config = {
    user: env.DB_USER || 'my_user',
    host: env.DB_HOST || 'localhost',
    database: env.DB_NAME || 'postgres',
    password: env.DB_PASSWORD || 'root',
    port: env.DB_PORT || 5432,
};

module.exports = config;