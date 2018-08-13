var express = require('express');

var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
const request = require('request');
var EventEmitter = require("events").EventEmitter;


var app = express();
app.use(cors());

/*
  Returns data from provided link when called,
  runs on port 8081 locally.
  Utilizes CORS.

*/


const PORT = 8081 || process.env.PORT
app.get('/myapi', function(req, res) {
    
    var res_body = new EventEmitter();
    
    request({
      uri: 'http://terriblytinytales.com/test.txt'
  },function(err, response, body){
      console.log(typeof(body));
      res_body.data = body;
      res_body.emit('update');
  });
  
  res_body.on('update',function(){
    res.json( {success: res_body.data} );
  })
  
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
