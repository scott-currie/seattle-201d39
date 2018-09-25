var imgElement1 = document.getElementById('my-image1');
var imgElement2 = document.getElementById('my-image2');
var imgElement3 = document.getElementById('my-image3');
var detail = document.getElementById('detail');
var maxClicksAllowed = 5;

function Images(filepath, filename, numberOfTimesShown=0, votes=0){
  this.imgSource = filepath;
  this.filename = filename;
  this.numberOfTimesShown = numberOfTimesShown;
  this.votes = votes;
  Images.allImages.push(this);
}
Images.allImages = [];

function initializeDatabase() {
  new Images('assets/bag.jpg', 'bag');
  new Images('assets/banana.jpg', 'banana');
  new Images('assets/bathroom.jpg', 'bathroom');
  new Images('assets/boots.jpg', 'boots');
  new Images('assets/breakfast.jpg', 'breakfast');
  new Images('assets/bubblegum.jpg', 'bubblegum');
  new Images('assets/chair.jpg', 'chair');
  new Images('assets/cthulhu.jpg', 'cthulhu');
  new Images('assets/dog-duck.jpg', 'dog-duck');
  new Images('assets/dragon.jpg', 'dragon');
  new Images('assets/pen.jpg', 'pen');
  new Images('assets/pet-sweep.jpg', 'pet-sweep');
  new Images('assets/scissors.jpg', 'scissors');
  new Images('assets/shark.jpg', 'shark');
  new Images('assets/sweep.png', 'sweep');
  new Images('assets/tauntaun.jpg', 'tauntaun');
  new Images('assets/unicorn.jpg', 'unicorn');
  new Images('assets/usb.gif', 'usb');
  new Images('assets/water-can.jpg', 'water-can');
  new Images('assets/wine-glass.jpg', 'wine-glass');
}

function setupEventListeners() {
  imgElement1.addEventListener('click', eventHandler);
  imgElement2.addEventListener('click', eventHandler);
  imgElement3.addEventListener('click', eventHandler);
}

function removeEventListeners() {
  imgElement1.removeEventListener('click', eventHandler);
  imgElement2.removeEventListener('click', eventHandler);
  imgElement3.removeEventListener('click', eventHandler);
}

/*
  var lastSeen = {}
  var thisTime = {}
    thisTime[random] = true;
 */

function eventHandler(event){

  // Increase the vote count on the one that got clicked
  var imageName = event.target.alt;
  for( var i=0; i<Images.allImages.length; i++) {
    if(Images.allImages[i].filename === imageName ) {
      Images.allImages[i].votes++;
      maxClicksAllowed--;
      break;
    }
  }

  if(maxClicksAllowed === 0) {
    removeEventListeners();
    // get out
    summarizeData();
    return;
  }

  // Images.allImages[randomNum1].votes++;
  // Get 3 new ones
  //   Make sure we don't have dupes on screen
  //   Make sure we don't have dupes from prev screen
  //   Increase their view count

  // Increase the counter -- if we're at 25, stop
  // Summarize the data

  var randomNum1 = Math.floor(Math.random()*Images.allImages.length);
  var randomNum2 = Math.floor(Math.random()*Images.allImages.length);
  var randomNum3 = Math.floor(Math.random()*Images.allImages.length);

  imgElement1.src = Images.allImages[randomNum1].imgSource;
  imgElement1.alt = Images.allImages[randomNum1].filename;

  imgElement2.src = Images.allImages[randomNum2].imgSource;
  imgElement2.alt = Images.allImages[randomNum2].filename;

  imgElement3.src = Images.allImages[randomNum3].imgSource;
  imgElement3.alt = Images.allImages[randomNum3].filename;

  Images.allImages[randomNum1].numberOfTimesShown++;
  Images.allImages[randomNum2].numberOfTimesShown++;
  Images.allImages[randomNum3].numberOfTimesShown++;

 }

 function summarizeData() {
   var ul = document.createElement('ul');

   for(var i=0; i<Images.allImages.length; i++) {
     var li = document.createElement('li');
     li.textContent = `
        ${Images.allImages[i].filename}
        Views: ${Images.allImages[i].numberOfTimesShown}
        votes: ${Images.allImages[i].votes}
     `;
     ul.appendChild(li);
   }
   detail.appendChild(ul);
 }

setupEventListeners();
initializeDatabase();
