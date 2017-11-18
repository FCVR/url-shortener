var bases = require('bases');

module.exports = {
    generateRandomNumber: function (maxVal){
      return Math.floor((Math.random() * maxVal) + 1);
    },
    getBase64FromBase10: function(input){
      return bases.toBase62(input);
    }
};
