
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/getStudentInfo', (req, res) => {
    db.query("SELECT * FROM student", (err, data) => {
        if(!err) res.send({ student : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

