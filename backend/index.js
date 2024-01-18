const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const studentRoute = require('./routes/studentRoute');

// middlewares
app.use(express.json());
app.use(cors());

// app routes

app.use('/api/students' , studentRoute);

//{useNewUrlParser : true , useUnifiedTopology : true}
mongoose.connect(process.env.DB_URI)
  .then (() =>{
    app.listen(8000 , ()=>{
      console.log('Database connected successfully');
    });
    
  })
  .catch(error =>{
    console.log('server side error' , error);
  })

