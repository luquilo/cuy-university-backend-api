import express from 'express';

const app = express();
const port = 3000;
import bodyParser from 'body-parser';

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('utamaa')
})

app.get('/hello', (req,res) => {
    console.log({ urlparams : req.query })
    res.send('hello page')
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