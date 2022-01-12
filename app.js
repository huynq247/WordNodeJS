const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
var path = require('path');

// app.use(bodyParser.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
//Define Path
global.__base          = __dirname + '/';
global.__path_app      = __base + 'app/';
global.__path_routes  = __path_app + 'routes/';
global.__path_schemas = __path_app + 'schemas/';
global.__path_models= __path_app + 'models/';



const server = http.createServer(app);
server.listen(8000);

const database = {
    username: "project",
    password: "quanghuy",
    database: "api_dictionary",
  }
  
  
  mongoose.connect(`mongodb+srv://${database.username}:${database.password}@cluster0.hfppr.mongodb.net/${database.database}?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true});
  
  const db = mongoose.connection;
  db.on('error', ()=>{
      console.log('OH no Error')
  });
  db.once('open', ()=> {
      console.log('Connected');
  });
  
  app.use('/api/v1', require(__path_routes + 'index'));