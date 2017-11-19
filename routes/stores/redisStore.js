var redis = require("redis")
var client = redis.createClient();
var hashKey = 'urls';

client.on("error", function (err) {
    console.log("Redis Error " + err);
});

module.exports = {
  put: function(key, val, cb){
    client.hset(hashKey, key, val, function (err, reply) {
        console.log('reply from redis: ' + reply.toString());
        if(err){
            cb(error);
        }else{
            cb(null);
        }
    });
  },
  exists: function(key, cb){
    if(inMemoryCache[key]){
      cb(true, null);
    }else{
      cb(false, null);
    }
  },
  get: function(key, cb){
    client.hget(hashKey, key, function (err, reply) {
        console.log('reply from redis', reply);
        if(err){
            console.log('error from redis', err);
            cb(null, err);
        }else{
            cb(reply, null);
        }
    });
  },
  getAll: function(cb){
    client.hkeys(hashKey, function (err, replies) {
    console.log(replies.length + " replies:");
      if(err){
        cb(null, err);
      }else{
        cb(replies, null);
      }
    });
  }
};
