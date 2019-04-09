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

// var buttons = document.querySelectorAll('.addButton');
// console.log(buttons);

// var sandwichQty = [];
// for (var i = 0; i < buttons.length; i++) {
//       sandwichQty.push(0);
// }

// console.log(sandwichQty);














// Three Tries of garbage code

function setupCart() {
      var addButtons = document.getElementsByClassName('addButton');

      // create a array containing each ID, it will check if the id is equal to the event one, adds to sandwich number then

      // global variable, array containing ITEMS in cart
      var sandwichIDs = [];
      for (var i = 0; i < addButtons.length; i++) {
            var sandwich;
            addButtons[i].addEventListener('click', function (e) {
                  // gets the ID of the ITEM
                  var sandwichID = e.target.nextElementSibling.id;
                  sandwich = e.target.nextElementSibling;

                  // runs through ID's array, if ID already inside adds to number and disables cloning
                  // else it adds ID to array and clones sandwich
                  // console.log(sandwichIDs)
                  // for (var i = 0; i < sandwichIDs.length + 1; i++) {
                  //       var sandwichNumber = 1;
                  //       if (sandwichIDs[i] = sandwichID) {
                  //             sandwichNumber++;
                  //             sandwich = e.target.nextElementSibling.cloneNode(true);
                  //       } else {
                  //             sandwichIDs.push(sandwichID);
                  //             sandwich = e.target.nextElementSibling.cloneNode(false);
                  //       }
                  // }
                  var sandwichNumber = 0;
                  var checkID = sandwichIDs.includes(sandwichID);
                  console.log(checkID);
                  if (checkID = false) {
                        sandwichIDs.push(sandwichID);
                        sandwich = e.target.nextElementSibling.cloneNode(false);
                  } else {
                        sandwichNumber++;
                        sandwich = e.target.nextElementSibling.cloneNode(true);
                        sandwichIDs.push(sandwichID)
                  }
                  console.log(sandwichIDs);


                  var cart = document.getElementById('cart');
                  console.log(cart);
                  cart.appendChild(sandwich);



                  var span = document.createElement('span');
                  var text = document.createTextNode(sandwichNumber)
                  span.appendChild(text)
                  cart.insertBefore(span, sandwich)
                  for (var i = 0; i < cart.childElementCount; i++) {

                  }

            });

      }
}




// function addItem(e) {
//       var foodItem = e.target.nextElementSibling;
//       var foodID = e.target.nextElementSibling.id;
//       console.log(foodID);
//       var foodDescription = foodItem.cloneNode(true);
//       console.log(foodDescription);
//       var cartBox = document.getElementById('cart');
//       console.log(cartBox);


//       var number = 0;
//       for (var i = 0; i < cartBox.length - 1; i++) {
//             var span = document.createElement('span');
//             var text = document.createTextNode(number);
//             span.appendChild(number);
//             foodDescription.insertBefore(span);
//             // insert before each child node
//             // must contain number
//             // append to cartBox
//       }

//       var duplicateOrder = false;

//       for (var i = 0; i < cartBox.childNodes; i++) {
//             if ([i].id = foodID) {
//                   number++;
//                   break;
//             }
//       }

//       console.log(number)

//       if (duplicateOrder = false) {
//             var orderCount = document.createElement('span');
//             orderCount.appendChild(number);
//             foodDescription.appendChild(orderCount);
//             cartBox.appendChild(foodDescription);
//       }



// }










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