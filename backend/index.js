const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
const datamodel = require('./models/Birthday');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors ());
//const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://arpithasbhat:nevermind@crud.okuxu.mongodb.net/birthday?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db=mongoose.connection;
app.post('/add', (req, res) =>{
    //console.log(req.body);
    const name=req.body.name;
    const dob=req.body.dob;
    const data = {
        name: name,
        dob: dob
    }
    const birthday= new datamodel({name: data.name, dob: data.dob});
    birthday.save().then(obj=>console.log(obj)).catch(err=>console.log(err));
    res.json(data);
    
    
});
app.get('/gdata',(req,res)=>{
    db.collection('birthdays').find({}).toArray(function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    });
        
//if(process.env.NODE_ENV === 'production'){
  //  app.use(express.static('../frontend/build'));
//}

app.listen(3001,() => {
    console.log(`server running on port 3001`);
});