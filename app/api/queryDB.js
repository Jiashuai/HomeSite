/**
 * Created by root on 8/19/2014.
 */


exports.readMsg = function(req,res){

    var db = require("../helper/conn_database").conn_db();   //connect to the databases


    db.open(function(err,db){
        if(err){
            console.log(err);
            return false;
        }

        <!--query the content of collection -->
        db.collection('languages',{safe:true},function(err,collection){
            collection.find().toArray(function(err,items){
                if(err){
                    console.log(err);
                    return false;
                }
                res.json(items);
//              process.exit();
                db.close();   //close the connection.
                console.log("the db-connection is closed.");
            });
        });

    });

};