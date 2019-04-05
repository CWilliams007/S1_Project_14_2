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
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener('click', function (e) {
                  var sandwich = e.target.nextElementSibling.cloneNode(true);
                  console.log(sandwich);
                  var sandwichID = e.target.nextElementSibling.id;
                  console.log(sandwichID);
                  var sandwichNumber = 1;


                  var cart = document.getElementById('cart');
                  console.log(cart);
                  cart.appendChild(sandwich);



                  var idTest = cart.includes(sandwichID);
                  if (idTest = true) {
                        sandwichNumber++;
                  }
                  var span = document.createElement('span');
                  var text = document.createTextNode(sandwichNumber)
                  span.appendChild(text)
                  cart.insertBefore(span, sandwich)
                  for (var i = 0; i < cart.childElementCount; i++) {

                  }

            });

      }
}




function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = e.target.nextElementSibling.id;
      console.log(foodID);
      var foodDescription = foodItem.cloneNode(true);
      console.log(foodDescription);
      var cartBox = document.getElementById('cart');
      console.log(cartBox);


      var number = 0;
      for (var i = 0; i < cartBox.length - 1; i++) {
            var span = document.createElement('span');
            var text = document.createTextNode(number);
            span.appendChild(number);
            foodDescription.insertBefore(span);
            // insert before each child node
            // must contain number
            // append to cartBox
      }

      var duplicateOrder = false;

      for (var i = 0; i < cartBox.childNodes; i++) {
            if ([i].id = foodID) {
                  number++;
                  break;
            }
      }

      console.log(number)

      if (duplicateOrder = false) {
            var orderCount = document.createElement('span');
            orderCount.appendChild(number);
            foodDescription.appendChild(orderCount);
            cartBox.appendChild(foodDescription);
      }



}










// function setupCart() {
//       var addButtons = document.getElementsByClassName('addButton');

//       for (var i = 0; i < addButtons.length; i++) {
//             addButtons[i].addEventListener('click', addItem);
//       }
// }

// // step 5
// function addItem(e) {
//       // 
//       var foodItem = e.target.nextElementSibling;
//       console.log(foodItem);
//       var foodID = e.target.nextElementSibling.id;
//       console.log(foodID)
//       var foodDescription = foodItem.cloneNode(true);
//       console.log(foodDescription)
//       var cartBox = document.getElementById('cart');
//       console.log(cartBox)
//       var duplicateOrder = false;

//       var number = 0;






//       var cartBoxChildren = cartBox.childNodes;
//       var cartBoxFirstChild = cartBox.firstElementChild;
//       for (var i = 0; i < cartBoxChildren.length; i++) {
//             if (cartBoxChildren[i].id = foodID) {
//                   number++;
//                   break;
//             }
//       }

//       console.log(number)

//       if (duplicateOrder = false) {
//             var orderCount = document.createElement('span');
//             orderCount.innerHTML = number;
//             foodDescription.insertBefore(orderCount, foodDescription.firstChild);
//             cartBox.appendChild(foodDescription);
//       }


// }