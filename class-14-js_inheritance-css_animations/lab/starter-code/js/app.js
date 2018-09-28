'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  this.items.push(new CartItem(product, quantity));

};

Cart.prototype.saveToLocalStorage = function() {
  var jsonCart = JSON.stringify(this.items);
  localStorage.setItem('cart', jsonCart);
};

Cart.prototype.removeItem = function(item) {
  // Note: You will have to decide what kind of parameter to pass in here!
  // Loop through this.items and compare each name to item.name
  for (var i = 0; i < this.items.length; i++) {
    console.log("comparing " + this.items[i].product + " and " + item.name);
    if (this.items[i].product === item.name) {
      // swap the current item with the last item
      this.items[i] = this.items[this.items.length - 1];
      // throw away the last item
      this.items.pop();
    }
  }
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};

var getProductByName = function (name) {
  for (var i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].name === name) {
      return Product.allProducts[i];
    }
  }
}

Product.allProducts = [];

function generateCatalog() {
  console.log(new Product('assets/bag.jpg', 'Bag'));
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}


// Initialize the app by creating the big list of products with images and names
generateCatalog();
