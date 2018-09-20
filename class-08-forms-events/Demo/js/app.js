'use strict';

// array to hold the people
var allPerson = []; 

// get specific elements from the DOM
var personTable = document.getElementById('person');
var personForm = document.getElementById('peopleForm');

// Person Constructor function. This is what we will use
// to instantiate our person object
function Person(firstName, lastName, favoriteColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  allPerson.push(this);
  console.log(allPerson);
}

// we want all person's to have a render to construct
// the appropriate row
Person.prototype.render = function () {
  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');
  tdElement.textContent = this.firstName;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.lastName;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.favoriteColor;
  trElement.appendChild(tdElement);

  personTable.appendChild(trElement);
};

// "seed" or create default data to display on the table
new Person('Amanda', 'Iverson', 'Red');
new Person('John', 'Cokos', 'Black');
new Person('Sally', 'Simple', 'Yellow');
new Person('Russel', 'Wilson', 'Blue/Green');
new Person('Elsa', 'Queen', 'Blue');
new Person('Anna', 'Princess', 'Purple');
new Person('Jack', 'Sparrow', 'Rum');

// construct header with all the titles for each column
function makeHeaderRow() {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'First Name';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Last Name';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Favorite Color';
  headerTrElement.appendChild(thElement);

  personTable.appendChild(headerTrElement);
}

// iterate through the all person array and render each person object
function renderPeople() {
  for(var i of allPerson) {
    i.render();
    console.log(allPerson[i]);
  }
}

// Event Handler
function addNewPerson(event){
    // please don't refresh the browser on click
    event.preventDefault();

    console.log(event.target.firstName.value);

    var newFirstName = event.target.firstName.value;
    var newLastName = event.target.lastName.value;
    var favColor = event.target.favColor.value;

    new Person(newFirstName, newLastName, favColor);

    personTable.innerHTML = '';
    makeHeaderRow();
    renderPeople();

}
// setting an event listener onto the FORM on a submit. 
// addNewPerson is a callback, referencing the event handler above
personForm.addEventListener('submit', addNewPerson)

// render the things
makeHeaderRow();
renderPeople();