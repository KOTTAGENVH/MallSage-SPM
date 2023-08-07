import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
//Routes file paths



const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//routes are declared here




try{
  const link = "mongodb+srv://Anjana_123:SSG0FPQcNKwnLX1I@mallsage.micefmh.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const {connection} = mongoose;
  connection.once('open', ()=>{
    console.log("mongo DB connection is success!!!")
  })

}catch(err){
  console.log('Database Connection error:', err);
}

app.listen(PORT, ()=>{
  console.log(`The server is running on ${PORT}`)
})