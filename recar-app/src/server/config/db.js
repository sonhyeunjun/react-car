// 모듈과 관련된 객체에 소속되어 있는 db 메소드에 객체 전달하는 것으로 약속
var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost', // db 서버가 어떤 컴퓨터에 있는지
    user : 'root', // 유저
    password : 'root', // 비번
    database : 'used_car_db' //db이름
}); // 이 결과가 db라는 변수에 담김

module.exports = db; 
// 리턴되는 값은 항상 module.exports 이다

