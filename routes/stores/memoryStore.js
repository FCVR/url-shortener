var inMemoryCache = {};

module.exports = {
  put: function(key, val){
    inMemoryCache[key] = val;
  },
  exists: function(key){
    if(inMemoryCache[key]){
      return true;
    }else{
      return false;
    }
  },
  get: function(key){
    return inMemoryCache[key];
  },
  getAll: function(){
    return inMemoryCache;
  }
};
