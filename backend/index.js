import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dbConnection from './db.js';
//Routes file paths



const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//routes are declared here




dbConnection();


app.listen(PORT, ()=>{
  console.log(`The server is running on ${PORT}`);
})