var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
var trips = [
 {
   "idx": 0,
   "title": "Lost in Paradise",
   "location": "Hawaii",
   "date": "November 15th",
   "days": "7",
   "image": "flower.jpg",
   "rating": "4"
 },
 {
   "idx": 1,
   "title": "Breathtaking Beauty",
   "location": "Yosemite",
   "date": "June 25th",
   "days": "4",
   "rating": "4",
   "image": "falls.jpg"
 },
 {
   "idx": 2,
   "title": "Wild Expanse",
   "location": "Yellowstone",
   "date": "August 11th",
   "days": "6",
   "rating": "2",
   "image": "bison.jpg"
 },
 {
   "idx": 3,
   "title": "Awe Inspiring",
   "location": "Zion",
   "date": "September 16th",
   "days": "4",
   "rating": "4",
   "image": "peak.jpg"
 }
];
app.get('/getList', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips));
});
app.get('/getTrip', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips[req.query.idx]));
});
app.post('/setRating', function(req, res){
  var test = 1;
  trips[req.body.idx].rating = req.body.rating;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips[req.body.idx]));
});
app.listen(80);