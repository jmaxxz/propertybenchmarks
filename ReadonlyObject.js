function ReadonlyObject(){
}

Object.defineProperty(ReadonlyObject.prototype, 'num', {
  enumerable: true,
  configurable: false,
  writable: false,
  value: 0
});

Object.defineProperty(ReadonlyObject.prototype, 'str', {
  enumerable: true,
  configurable: false,
  writable: false,
  value: ''
});

Object.defineProperty(ReadonlyObject.prototype, 'bool', {
  enumerable: true,
  configurable: false,
  writable: false,
  value: false
});

module.exports = ReadonlyObject;
