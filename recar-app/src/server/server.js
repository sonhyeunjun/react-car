const express = require('express');
const app = express(); // app를 애플리케이션 한다
const PORT = process.env.PORT || 4000; // port 속성을 사용하고 없으면 4000을 사용
const db = require('./config/db');

app.get('/api/getCarInfo', (req, res) => {
    db.query("SELECT * FROM used_car", (err, data) => {
        if(!err) res.send({ car_res : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

