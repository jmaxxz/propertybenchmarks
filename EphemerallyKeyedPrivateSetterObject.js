var pcount = 3;
var ephemeralKey = ~~(Math.random()* (pcount+1))
var _numKey = (ephemeralKey++ % pcount);
var _boolKey = (ephemeralKey++ % pcount);
var _strKey = (ephemeralKey++ % pcount);
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
