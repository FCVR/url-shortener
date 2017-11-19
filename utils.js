var bases = require('bases');
var config = require('./config');

module.exports = {
  generateRandomNumber: function (maxVal) {
    return Math.floor((Math.random() * maxVal) + 1);
  },

  getBase64FromBase10: function (input) {
    return bases.toBase62(input);
  },

  getBASE: function () {
    return config.BASE_CHARS.length
  },

  padWithZeroes: function (number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
      my_string = '0' + my_string;
    }
    return my_string;
  },

  encode: function (num) {
    let val = "";
    while (num > 0) {
      val = val + config.BASE_CHARS.charAt(num % this.getBASE());
      num /= this.getBASE();
      num = Math.floor(num);
    }
    val = val.split("").reverse().join("");
    val = this.padWithZeroes(val, config.noOfChars);
    return val;
  },

  getRandomBaseString : function() {
    return this.encode(this.generateRandomNumber(Math.pow(this.getBASE(), config.maxChars)));
  }

};
