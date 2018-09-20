'use strict';

var links = document.getElementsByClassName('switcher');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', switchTableClass);
}

function switchTableClass(e) {
  e.preventDefault();
  var table = document.getElementById('myTable');
  table.className = e.target.dataset['table'];
}