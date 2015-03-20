var ephemeralKey = ~~(Math.random()*100000)
var _numKey = ephemeralKey ^ 1;
var _boolKey = ephemeralKey ^ 2;
var _strKey = ephemeralKey ^ 4;;
function EphemerallyKeyedPrivateSetterObject(){
  this[_numKey] = 0;
  this[_strKey] = '';
  this[_boolKey] = false;
}

Object.defineProperty(EphemerallyKeyedPrivateSetterObject.prototype, 'num', {
  get : function() {
    return this[_numKey];
  }
});

Object.defineProperty(EphemerallyKeyedPrivateSetterObject.prototype, 'str', {
  get : function() {
    return this[_strKey];
  }
});

Object.defineProperty(EphemerallyKeyedPrivateSetterObject.prototype, 'bool', {
  get : function() {
    return this[_boolKey];
  }
});

module.exports = EphemerallyKeyedPrivateSetterObject;
