import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{
  console.log(`The server is running on ${PORT}`)
})