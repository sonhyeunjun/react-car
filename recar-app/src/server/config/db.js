let mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost', // DB
    user : 'root', //DB 아이디
    password : 'root', // 비번
    database : 'testdb' // DB이름
});

module.exports = db;