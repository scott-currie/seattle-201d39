/* global Cart */
'use strict';


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let target = document.getElementsByTagName('tbody')[0];
  while(target.hasChildNodes()){
    let removedRows = target.childNodes;
    let trCount = target.childElementCount;
    target.removeChild(removedRows[trCount-1]);
  }
}


function showCart() {

  // TODO: Find the table body
  let target = document.getElementsByTagName('tbody')[0];
  console.log('in showCart(), target is ' + target);
  for(let i = 0; i < cart.items.length; i++){
    let newElement = document.createElement('tr');
    console.log('tr created');
    target.appendChild(newElement);
    let newElementChild = document.createElement('td');
    // TODO: replace this with actual delete link
    let newElementContent = document.createTextNode('delet this');
    newElementChild.appendChild(newElementContent);
    newElement.appendChild(newElementChild);
    newElementChild = document.createElement('td');
    newElementContent = document.createTextNode(cart.items[i].quantity);
    newElementChild.appendChild(newElementContent);
    newElement.appendChild(newElementChild);
    newElementChild = document.createElement('td');
    newElementContent = document.createTextNode(cart.items[i].product.name);
    newElementChild.appendChild(newElementContent);
    newElement.appendChild(newElementChild);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();


