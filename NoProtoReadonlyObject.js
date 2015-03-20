function NoProtoReadonlyObject(){
  Object.defineProperty(this, 'num', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 0
  });

  Object.defineProperty(this, 'str', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: ''
  });

  Object.defineProperty(this, 'bool', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: false
  });
}

module.exports = NoProtoReadonlyObject;
