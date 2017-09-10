var express = require('express');
var app = module.exports = express.Router();
var Account = require('./account');

app.get('/accounts', function(req, res){
    Account.find({}, function(err, accounts){
        if(err){
            return res.json({"success": false, "msg": "Error while retrieving accounts"});
        }
        res.status(200).send({"success": true, "result": accounts});
    });
});

app.post('/accounts', function(req, res){
    if(!req.body.Number || !req.body.TotalServices || !req.body.TotalBill){
        return res.status(400).send({"success": false, "msg": "All the account information must be sent"})
    }

    var newAccount = new Account({
        Number: req.body.Number,
        TotalServices: req.body.TotalServices,
        TotalBill: req.body.TotalBill
    });

    newAccount.save(function(err){
        if(err){
            console.log("some error: ",err);
            return res.json({"success": false, "msg": "Error while creating Account"});
        }
        res.status(201).send({"success": true, "msg": "Successful created mew Account"})
    });
});

