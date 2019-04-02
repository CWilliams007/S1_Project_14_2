"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Chad Williams
   Date:   4.2.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// step 3, onload runs function
window.onload = setupCart;

function setupCart() {
      var addButtons = document.getElementsByClassName('addButton');

      for (var i = 0; i <= addButtons.length; i++) {
            addEventListener('click', addItem);
      }
}

// step 5
function addItem() {
      var foodItem = e.nextElementSibling;
      console.log(foodItem);
      var foodID = foodItem.target.id;
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById('cart');
      var duplicateOrder = false;

      for (var i = 0; i < cartBox.childNodes.length; i++) {
            if (cartBox.childNodes[i].target.id = 'foodID') {
                  cartBox.firstElementChild++;
            }
      }

      if (duplicateOrder = false) {
            var orderCount = document.createElement('span');
            orderCount.innerHTML = '1';
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}