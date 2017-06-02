/**
 * Created by cmios on 2017/5/27.
 */
var http = require('http');

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var selectData = function(db, callback) {
    //连接到表
    var collection = db.collection('site');
    //查询数据
    var whereStr = {"name":'mayongxin'};
    collection.find(whereStr).toArray(function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}


http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        selectData(db, function(result) {
            console.log(result);
            response.end(JSON.stringify(result));
            db.close();
        });
    });

    //response.end('Hello world\n');
}).listen(8888);