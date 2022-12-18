import express from 'express';
import bodyParser from 'body-parser';
import db from './connection.js'
import response from './response.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req,res) => {
    const sql = 'select * from mahasiswa';

    db.query(sql, (error, result) => {
        //hasil data dari mysql
        response(200, result, 'get all data from mahasiswa', res)
    })
})

app.get('/find', (req,res) => {
    const sql = `select nama_lengkap from mahasiswa where nim =  ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "find mahasiswa name", res)
    })
})

app.post('/login', (req,res) => {
    console.log({ outside: req.body })
    res.send('login berhasil')
})

app.put('/username', (req,res) => {
    console.log({ updatedUsername : req.body })
    res.send('update berhasil!')
})

app.listen(port, () => console.log(`server is running on localhost: ${port}`))