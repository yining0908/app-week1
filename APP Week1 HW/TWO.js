function greet(){console.log('hi');}
greet();

function loggreeting(fn){
  fn();}
loggreeting(greet);

var greetme=function(){console.log('hihi');}
greetme();
loggreet(greetme);
