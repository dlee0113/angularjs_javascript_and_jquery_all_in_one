var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
app.get('/request', function(req, res){
  var queryObj = req.query;
  if (queryObj.name == "Lancalot" && queryObj.color == "blue"){
    res.send(200, "Welcome To AJAX!");     
  } else {
    res.send(400, "Invalid Answers!");
  }
});
app.listen(80);