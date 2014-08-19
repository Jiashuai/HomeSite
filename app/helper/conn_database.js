/**
 * Created by root on 8/19/2014.
 */


exports.conn_db = function(){

    var config = require("../../config");   //request the config files.

    var mongodb = require("mongodb");   //connect to the mongodb driver.

    var server = new mongodb.Server(config.mongodb.hostaddress,config.mongodb.port,{auto_reconnect:true});

    var db = new mongodb.Db(config.mongodb.dbname,server,{safe:false});

    return db;

};