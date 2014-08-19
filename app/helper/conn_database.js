/**
 * Created by root on 8/19/2014.
 */


exports.conn_db = function(){

    var config = require("../../config");   //配置文件

    var mongodb = require("mongodb");   //连接mongodb驱动

    var server = new mongodb.Server(config.mongodb.hostaddress,config.mongodb.port,{auto_reconnect:true});

    var db = new mongodb.Db(config.mongodb.dbname,server,{safe:false});


    return db;

};