var appRoot = require('app-root-path');
var MongoClient = require('mongodb').MongoClient
var config = require(appRoot +'/config');

var mongoUrl = config.stores.mongo.url;
if(process.env.MONGODB_URI){
     mongoUrl = process.env.MONGODB_URI;
}

var connect = function(callback){
  MongoClient.connect(mongoUrl, function(err, db) {
    console.log("Connected successfully to server");
    var collection = db.collection('urls')
    callback(collection);
    db.close();
  });
}

module.exports = {
  put: function(id, url,callback){
    connect(function(collection){
      var doc = {surl:id,ourl:url}
      collection.insertOne(doc, function(err, r) {
        if(err){
          callback(err)
        }else{
          console.log("insertedCount "+ r.insertedCount);
          callback(null);
        }
      });
    });
  },
  exists: function(id,callback){
    connect(function(collection){
      var count = collection.find({'surl':id}).count();
      if(count){
        callback(true,null)
      }else{
        callback(false,null)
      }
    });
  },
  get: function(id,callback){
    connect(function(collection){
      collection.findOne({ 'surl' : id }, function(err, doc) {
        callback(doc.ourl,err);
      });
    });
  },
  getAll: function(callback){
    connect(function(collection){
      collection.find({},{"_id":0}).toArray(function(err, docs){
        var urls = docs.map(function(d){return d.ourl});
        callback(docs,err);
      });
    });
  }
};
