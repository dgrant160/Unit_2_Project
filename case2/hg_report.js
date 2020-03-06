"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2
   Author: Dylan Grant
   Date:   
   
   Filename: hg_report.js
	
*/
// stores html game code
var gameReport = "<h1>" + itemTitle + "</h1> \
            <h2>By:" + itemManufacturer + "</h2> \
            <img src='hg_" +itemID+ ".png' alt='id' id='gameImg' /> \
            <table> \
            <tr><th>Product Id</th><td>"+itemID+"</td></tr> \
            <tr><th>List Price</th><td>"+itemPrice+"</td></tr> \
            <tr><th>Platform</th><td>"+itemPlatform +"</td></tr> \
            <tr><th>ESRB Rating</th><td>"+itemESRB+"</td></tr> \
            <tr><th>Condition</th><td>"+itemCondition+"</td></tr> \
            <tr><th>Release</th><td>"+itemRelease+"</td></tr> \
            </table> " +itemSummary;

//rating sum is set to 0
var ratingsSum = 0;
//makes the count equal to the array
var ratingsCount = ratings.length;
//loops and adds to rating sum
for(var i = 0; i<ratings.length; i++){
   ratingsSum += ratings[i];
}
//divide ratings sum by total ratings
var ratingsAvg = ratingsSum/ratingsCount;

//makes it equal to html code and adds ratings average
var ratingReport = "<h1>Customer Reviews</h1> \
               <h2>"+ratingsAvg+" out of 5 stars ("+ratingsCount+" reviews)</h2>";

//makes a loop for ratings
for(var i = 0; i<3; i++){
   ratingReport+= "<div class='review'> \
               <h1>"+ratingTitles[i]+"</h1> \
               <table> \
               <tr><th>By</th><td>"+ratingAuthors[i]+"</td></tr> \
               <tr><th>Review Date</th><td>"+ratingDates[i]+"</td></tr> \
               <tr><th>Rating</th><td>";
               //places number of starts the rating is 
               for(var p = 0; p<ratings[i]; p++){
                  ratingReport += "<img src='hg_star.png' />";
               }
   //adds rating report and closes table
   ratingReport+="</td></tr></table> \
   " +ratingSummaries[i]
    +"</div>";

}
document.getElementsByTagName("article")[0].innerHTML = gameReport;
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
