var inMemoryCache = {};

module.exports = {
  put: function(key, val, cb){
    inMemoryCache[key] = val;
    cb(null);
  },
  exists: function(key, cb){
    if(inMemoryCache[key]){
      cb(true, null);
    }else{
      cb(false, null);
    }
  },
  get: function(key, cb){
    cb(inMemoryCache[key], null);
  },
  getAll: function(cb){
    cb(inMemoryCache, null);
  }
};
