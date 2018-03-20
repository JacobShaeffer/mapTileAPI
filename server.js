'use strict';

//import external resources
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

//set up global variables and constants
const app = express();
const port = 8000;
const defaultRes = "/server/tileSet/6/0_0.png";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/tileSet/:zoom/:y/:x', function(req, res){
    let zoom = req.params.zoom;
    let y = req.params.y;
    let x = req.params.x;
    let resFile = `/server/tileSet/${zoom}/${y}_${x}.png`;
    console.log(__dirname + resFile);
    if(fs.existsSync(__dirname + resFile)){
        res.sendFile(__dirname + resFile);
    }
    else{
        res.sendFile(__dirname + defaultRes);
    }
});

//start the server
app.listen(port, function(){
    console.log('server listening on port ' + port.toString());
});