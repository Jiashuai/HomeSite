/**
 * Copyright 2014 eRealm Sdn.Bhd.
 *
 * Created by dang on 2/08/2014
 */

'use strict';

module.exports = function(app, express) {

    app.use(function(req, res, next) {
        var logger = require('./helper/logger');
        logger.info('Request: ', req.originalUrl);
        next();
    });

    app.get('/', function(req, res){
        res.render('index');
    });
    app.get('/contact', function(req, res){
        res.render('contact');
    });
    app.get('/about', function(req, res){
        res.render('about');
    });
    app.get('/work', function(req, res){
        res.render('work');
    });
    app.get('/project', function(req, res){
        res.render('project');
    });

    app.post('/app/message', require('./api/support').sendMessage);   <!--这个是党老师在演示前端测试post时用的-->
    app.get('/test', function(req, res){




        var mongodb = require("mongodb");

        var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});

        var db = new mongodb.Db("homesite",server,{safe:false});

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
//                    process.exit();
                });


            });
        });









    });


    //error handler
    app.use(require('./views/http/index').http500);
    app.use(require('./views/http/index').http404);
};