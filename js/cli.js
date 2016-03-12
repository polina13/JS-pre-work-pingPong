

// This code will display all numbers up to 100 without asking that user to put a number into a required field
// var pingPong = require ('./ping-pong.js').pingPong;
// first create the function of Pingpong. require.... what is in the () is the route and/or which js file to go

// console.log('Ping-ponging up to 100!');

// Asking the user the write a number of their choice using prompt();
var pingPong = require ('./ping-pong.js').pingPong;
var prompt = require ('prompt');
prompt.start();

prompt.get('goal', function (err, result) {
  var result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });
});

// var goal = prompt ('What number would you like me to ping-pong up to ?');
// var result = pingPong(100);
// result.forEach(function(element) {
//   console.log(element);
// });

// after the code is writing i need to display in the terminal by first installing and running npm
