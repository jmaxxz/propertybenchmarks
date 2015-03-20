var Benchmark = require('benchmark');
var SimpleObject = require('./SimpleObject');
var ReadonlyObject = require('./ReadonlyObject');
var NoProtoReadonlyObject = require('./NoProtoReadonlyObject');
var ConventionPrivateSetterObject = require('./ConventionPrivateSetterObject');
var TruePrivateSetterObject = require('./TruePrivateSetterObject');
var EphemerallyKeyedPrivateSetterObject = require('./EphemerallyKeyedPrivateSetterObject');


var suite = new Benchmark.Suite;
var buffer = new Buffer("010203040506", "hex");
// add tests
suite.add('SimpleObject', function() {
  new SimpleObject();
})
.add('ReadonlyObject', function() {
  new ReadonlyObject();
})
.add('NoProtoReadonlyObject', function() {
  new NoProtoReadonlyObject();
})
.add('ConventionPrivateSetterObject', function() {
  new ConventionPrivateSetterObject();
})
.add('TruePrivateSetterObject', function() {
  new TruePrivateSetterObject();
})
.add('EphemerallyKeyedPrivateSetterObject', function() {
  new EphemerallyKeyedPrivateSetterObject();
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})

.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });