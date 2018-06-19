var express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./source/routes/crmRoutes');

//Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb')

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serve Static Files
app.use(express.static('public'));


routes(app);

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.send(`Node and Express Server is running on Port ${PORT}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})