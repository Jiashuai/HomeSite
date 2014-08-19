/**
 * Created by root on 8/19/2014.
 */


exports.readMsg = function(req,res){

    var db = require("../helper/conn_database").conn_db();   //连接数据库


    db.open(function(err,db){
        if(err){
            console.log(err);
            return false;
        }

        <!--查询一个collection中的内容 -->
        db.collection('languages',{safe:true},function(err,collection){
            collection.find().toArray(function(err,items){
                if(err){
                    console.log(err);
                    return false;
                }
                res.json(items);
//              process.exit();
                db.close();   //关闭数据库连接。这一语句只能写在这个地方，放在别出报错。
                console.log("the db-connection is closed.");
            });
        });

    });

};