/* Created by deveci on 09.07.2017. */

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var bodyParser=require('body-parser');
const uuidV1 = require('uuid/v1');

var port = 1200;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With ,application/x-www-form-urlencoded');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


var users=[
        {
            id:1,
            username:"admin",
            password:"123456",
            type    :"admin",
            group    :"admin",
            firstName:"ahmet",
            lastName:"deveci",
            email   :"test@gmail.com",
            phone   :"5445442233"
        },
        {
            id:2,
            username:"my_user",
            password:"123456",
            type    :"user",
            group    :"user",
            firstName:"ali",
            lastName:"veli",
            email   :"aliveli@gmail.com",
            phone   :"5445443344"
        }
    ]

app.get("/getUsers", function(req,res) {
    res.json({control:"Ok",users:users});
});

app.post("/loginCtrl", function(req,res) {
    console.log(req.body.data);
    var data = JSON.parse(req.body.data);
    console.log(data);
    var sess_id="";
    for (var i = 0, len = users.length; i < len; i++) {
        if(users[i].username===data.userName && users[i].password===data.password){
            sess_id = uuidV1();
            break;
        }
    }
	if (sess_id != ""){
        res.json({
                control     : "Ok",
                sessionID   : sess_id,
                user        : users[i]
        }
        )
    }
    else res.json(
        {
            control     :"Fail",
            sessionID   : "",
            user        : null
        });
});


server.listen(port, () => {
    console.log("Listening on port " + port);
});
