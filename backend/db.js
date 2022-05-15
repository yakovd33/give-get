const Pool = require('pg').Pool;
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

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
        rejectUnauthorized: false
    }
});

module.exports = pool;