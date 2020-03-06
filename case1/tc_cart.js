"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
   Author:
   Date:   
   
   Filename: tc_cart.js
	
*/
//sets orderTotal 0
var orderTotal = 0;

//stores  HTML code 
var cartHTML = "<table> \
         <tr> \
         <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> \
         </tr>";

//loop
for(var i= 0; i<item.length; i++){
   // adds more HTML
   cartHTML += "<tr> \
         <td><img src='tc_" + item[i] + ".png' alt='item' /></td> \
         <td>" + itemDescription[i] + "</td> \
         <td>$" +itemPrice[i] + "</td> \
         <td>" + itemQty[i] + "</td>";
   //item x quantity
   var itemCost = itemPrice[i] * itemQty[i];
   //adds more to the HTML
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   //orderTotal stores itemCost
   orderTotal += itemCost;
}

//adds more to the HTML
cartHTML+= "<tr> \
         <td colspan='4'>Subtotal</td> \
         <td>$" + orderTotal + "</td> \
         </tr> \
         </table>";

//puts everything in the cartHTML on the HTML
document.getElementById("cart").innerHTML = cartHTML;


