const express = require('express')
const app = express()
const port = process.env.PORT || 8000

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    database: process.env.RDS_DB_NAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

connection.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

connection.end();

app.get('/', (req, res) => {
    res.send('Hello Beanstalk!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})