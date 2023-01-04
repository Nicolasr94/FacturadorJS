import express from 'express';

const app = express()
const port = 3020;

app.use(express.static('public'))
app.listen(port,() => {
    console.log(`The server is up!, in PORT: ${port}`);
})


app.get('/',(req,res)=>{
    res.sendFile('index.html', { root: '.' })
})
