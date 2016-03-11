var pingPong = require ('./ping-pong.js').pingPong;
// first create the function of Pingpong. require.... what is in the () is the route and/or which js file to go

console.log('Ping-ponging up to 100!');
var result = pingPong(100);
result.forEach(function(element) {
  console.log(element);
});
