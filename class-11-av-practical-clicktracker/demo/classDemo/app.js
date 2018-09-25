'use strict';

// get DOM id of image
var imgElement = document.getElementById('goat');

// Need an array of (goat) objects
Goat.allGoats = [];


// Need a goat object
// Constructor Function

function Goat(filepath, goatName){
    this.imgSource = filepath;
    this.goatName = goatName;
    Goat.allGoats.push(this);
}

//Event Handler
function randomGoat(){
  //  var goatsLength = Goat.allGoats.length;
    var randomNumber = Math.floor(Math.random() * Goat.allGoats.length);
    imgElement.src = Goat.allGoats[randomNumber].imgSource;
    imgElement.alt = Goat.allGoats[randomNumber].goatName;
}

imgElement.addEventListener('click', randomGoat )
// Event listener
    // when there is a click,
    // In our event listenr 
    // go through array of objects to display a new goat.
    // use random generator to determine.
    // change the id of the image tag source

new Goat('img/cruisin-goat.jpg','Tom-cruisin-goat');
new Goat('img/kissing-goat.jpg','kissing-goat');
new Goat('img/sassy-goat.jpg','sassy-goat');
new Goat('img/smiling-goat.jpg','smiling-goat');
new Goat('img/sweater-goat.jpg','sweater-goat');


randomGoat();




