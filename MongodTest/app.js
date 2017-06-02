/**
 * Created by cmios on 2017/5/27.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';
var insertData = function (db, callback) {
    var colletion = db.collection('site');
    var data = [{"name":"mayongxin","url":"www.badicu.com"},{"name":"hansomezhao","url":"www.google.com"}];
    colletion.insert(data,function (err, result) {
        if (err){
            console.log('Error'+err);
            return;
        }
        callback(result);
    });
}
MongoClient.connect(DB_CONN_STR,function (err, db) {
    console.log("connect success!");
    insertData(db,function (result) {
        console.log(result);
        db.close();
    })
})