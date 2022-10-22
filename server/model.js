const { Client } = require('pg');

const env = process.env;
const client = new Client({
    user: env.DB_USER || 'my_user',
    host: env.DB_HOST || 'localhost',
    database: env.DB_NAME || 'postgres',
    password: env.DB_PASSWORD || 'root',
    port: env.DB_PORT || 5432,
});

client.connect();

const getAllRows = () => {
    return client.query('SELECT * FROM my_table ORDER BY id ASC')
        .then((res) => {
            return res.rows;
        })
}

const getFilterRowsContains = (column, value) => {
    return client.query(`SELECT * FROM my_table WHERE ${column} LIKE '%${value}%' ORDER BY id ASC`)
        .then((res) => {
            return res.rows;
        })
}

const getFilterRowsEquals = (column, value) => {
    console.log("column, value", typeof value)
    if (isNaN(parseInt(value))) {
        return client.query(`SELECT * FROM my_table WHERE ${column} LIKE '${value}' ORDER BY id ASC`)
            .then((res) => {
                return res.rows;
            })
    }
    else {
        return client.query(`SELECT * FROM my_table WHERE ${column}=${value} ORDER BY id ASC`)
            .then((res) => {
                return res.rows;
            })
    }
}

const getFilterRowsLess = (column, value) => {
    return client.query(`SELECT * FROM my_table WHERE ${column}<${value} ORDER BY id ASC`)
        .then((res) => {
            return res.rows;
        })
}


const getFilterRowsMore = (column, value) => {
    return client.query(`SELECT * FROM my_table WHERE ${column}>${value} ORDER BY id ASC`)
        .then((res) => {
            return res.rows;
        })
}

module.exports = {
    getAllRows,
    getFilterRowsContains,
    getFilterRowsEquals,
    getFilterRowsLess,
    getFilterRowsMore,
}