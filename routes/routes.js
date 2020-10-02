'use strict'
var express = require("express");
var router = express.Router();
var net = require('net');
var ethers = require('ethers');
//const { env } = require("process");
// const dotenv = require("dotenv");
// dotenv.config();
var config = require('../config');

var ethProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
console.log('Private Key: ' + config.ethereum.PrivateKey);
var wallet = new ethers.Wallet(config.ethereum.PrivateKey,ethProvider);
var contract_sign = new ethers.Contract(config.ethereum.ContractAddress, config.ethereum.ABI, wallet);

router.post("/registraHash", function(req, res) {
    var results = [];

    try{    
        var iduser = req.body.iduser;
        var hash = req.body.hash;

        console.log(iduser);
        console.log(hash);

        //V4: ethers.utils.bigNumberify(someValue);
        //V5: ethers.BigNumber.from(someValue)
        var sendPromise = contract_sign.storeHash(ethers.BigNumber.from(iduser),hash);

        sendPromise.then(function(transaction){
            results.push({
                result: "Success",
                tx_hash: transaction.hash
            });
            console.log('Transaction hx: ' + transaction.hash);
            res.status(200).send(results); 
        }); 

        //res.status(200).send('Test ok'); 
    } 
    catch(error)
    {
        results.push({
            result: "ERROR",
            error: error
        });
        console.log(error);
        res.status(500).send(results); 
    }

});

router.post("/getHash", function(req, res) {
    var results = [];

    try{    
        var iduser = req.body.iduser;

        console.log(iduser);

        //V4: ethers.utils.bigNumberify(someValue);
        //V5: ethers.BigNumber.from(someValue)
        var sendPromise = contract_sign.getHash(ethers.BigNumber.from(iduser));

        sendPromise.then(function(hash){
            results.push({
                result: "Success",
                data: hash
            });
            console.log('Hash Leído: ' + hash);
            res.status(200).send(results); 
        }); 

        //res.status(200).send('Test ok'); 
    } 
    catch(error)
    {
        results.push({
            result: "ERROR",
            error: error
        });
        console.log(error);
        res.status(500).send(results); 
    }

});

module.exports = router;
