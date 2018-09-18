// You can go to this REPL and make a copy of it to play around ...
// https://repl.it/@johncokos/Prototypes
//

var Person = function(first, last, hair) {
  this.firstName = first;
  this.lastName = last;
  this.hair = hair;
  this.think = function() { 
    console.log('Thinking in the core');
  }

  Person.people.push(this);

}
Person.people = [];

Person.prototype.render = function() {
  console.log(this.firstName + ' is Walkin....');
}

Person.prototype.think = function() {
  console.log(this.firstName + ' is Thinking....');
}

Person.prototype.jump = function() {
  console.log(this.firstName + ' does not want to jump ....');
}

Person.prototype.doSomeStuff = function() {
  this.render();
  this.think();
  this.jump();
}

var john = new Person('John','Cokos',false);
var cathy = new Person('Cathy','Cokos',true);

console.log(Person.people);
john.doSomeStuff();




