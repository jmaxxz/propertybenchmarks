function ConventionPrivateSetterObject(){
  this._num = 0;
  this._str = '';
  this._bool = false;
}

Object.defineProperty(ConventionPrivateSetterObject.prototype, 'num', {
  get : function() {
    return this._num;
  }
});

Object.defineProperty(ConventionPrivateSetterObject.prototype, 'str', {
  get : function() {
    return this._str;
  }
});

Object.defineProperty(ConventionPrivateSetterObject.prototype, 'bool', {
  get : function() {
    return this._bool;
  }
});

module.exports = ConventionPrivateSetterObject;
