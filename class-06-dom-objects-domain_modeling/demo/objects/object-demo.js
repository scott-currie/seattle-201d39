var cathy = {
  firstName: 'Cathy',
  spouse: 'John',
  kids: ['Allie','Zach','Kevin']
}

var john = {
  hair: false,
  height: 5.764,
  age: 50,
  name: {
    first:'John',
    middle: 'C',
    last: 'Cokos'
  },
  spouse: cathy,
  kids: ['Allie','Zach'],
  pets: [
    {
      kind: 'Dog',
      name: 'Rosie',
      toys: ['bone','tug','cookies']
    },
    {
      kind: 'Cat',
      name: 'Malcom'
    }
  ],
  growSomeHair: growHair,
  walk: function() {
    console.log(this.name.first + ' is walkin....');
  },
  listKids: function() {
    for( var i=0; i<this.kids.length; i++) {
      console.log( this.kids[i] );
    }
  },
  doThing: doTheThing
};

function doTheThing() {
  console.log('Hey, ' +  ' do the thing...');
}

function growHair() {
  this.hair = true;
}

console.log(john);
john.listKids();
console.log('Age,', john.age);
console.log('Name', john.name.first + ' ' + john.name.last);
console.log('Zach...', john.kids[1]);
console.log('The dog is', john.pets[0].name);
john.growSomeHair();
console.log('After Hair', john);
john.walk();
john.doThing();