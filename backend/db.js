const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    // ssl: process.env.NODE_ENV == 'development' ? false : {
    //     rejectUnauthorized: true
    // }
    ssl: {
        rejectUnauthorized: true
    }
});

module.exports = pool;