const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

async function getUsers () {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

async function getUser (id) {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE id = ?',
        [id]
    )
    return rows[0] 
}

async function addUser (name, age) {
    const [result] = await pool.query(
        'INSERT INTO users (name, age) VALUES (?, ?)',
        [name, age]
    )
    const id = result.insertId
    return getUser(id)
}


module.exports = { getUsers, getUser, addUser }

