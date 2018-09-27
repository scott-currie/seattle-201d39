/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {


  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.value = Product.allProducts[i].name;
    option.innerHTML = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // suss out the item picked from the select list
  var selectedProductName = document.getElementById('items').value;
  // get the quantity
  var selectedProductQuantity = parseInt(document.getElementById('quantity').value);
  // using those, add one item to the Cart
  cart.addItem(selectedProductName, selectedProductQuantity);
}

// Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var totalItems = 0;
  // console.log('cart items length', cart.items.length);
  for (var i = 0; i < cart.items.length; i++) {
    console.log(cart.items[i]);
    totalItems += cart.items[i].quantity;
  }
  console.log('totalItems=', totalItems);
  document.getElementById('itemCount').innerHTML = totalItems;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // Get the item and quantity from the form
  var productName = document.getElementById('items').value;
  var productQuantity = parseInt(document.getElementById('quantity').value);
  // console.log(productQuantity, productName);
  // TODO: Add a new element to the cartContents div with that information
  var cartContents = document.getElementById('cartContents');
  var cartContent = document.createElement('div');
  var cartContentText = productQuantity + ' ' + productName;
  console.log(cartContentText);
  cartContent.innerHTML = productQuantity + ' ' + productName;
  cartContents.appendChild(cartContent);


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
