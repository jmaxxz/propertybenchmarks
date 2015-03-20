function TruePrivateSetterObject(){
  var num = 0;
  var str = '';
  var bool = false;

  Object.defineProperty(this, 'num', {
    get : function() {
      return num;
    }
  });

  Object.defineProperty(this, 'str', {
    get : function() {
      return str;
    }
  });

  Object.defineProperty(this, 'bool', {
    get : function() {
      return bool;
    }
  });
}

module.exports = TruePrivateSetterObject;
