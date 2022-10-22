const { Client } = require('pg');
const config = require('../config');

const env = process.env;
const client = new Client(config);

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