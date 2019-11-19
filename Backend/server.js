const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-aogxp.mongodb.net/test?retryWrites=true&w=majority';;
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title:String,
    year:String,
    poster:String
})

const GameModel = mongoose.model('game', gameSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/games', (req, res) => {

    GameModel.find((error, data) =>{
        res.json({games:data});
    })
    // const myGames = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];

    // res.status(200).json(
    //     {
    //         games: myGame,
    //         message: 'Data Sent'
    //     });
})

app.delete('/api/games/:id',(req,res)=>{
    console.log(req.params.id);

    GameModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
            res.json(error);
        res.json(data);
    })
})

app.get('/api/games/:id', (req, res)=>{
    console.log(req.params.id);

    GameModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.post('/api/games', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    GameModel.create({
        title:req.body.title, 
        year:req.body.year, 
        poster:req.body.poster
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))