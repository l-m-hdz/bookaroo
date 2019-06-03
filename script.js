// JavaScript File
/* global $ */
$(document).ready(function() {
$("#titles").click(function(){
    console.log("Horror")
   $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=harrypotter",
        method: "GET",
        success: function(response) {
          console.log(response.items[0].volumeInfo.title);
          console.log(response.items[0].volumeInfo.authors[0]);                                                
   $("#gen1").html(response.items[0].volumeInfo.title);
       
   
        
    }
   });
});
});
$(document).ready(function() {
$("#titles").click(function(){
    console.log("Sci-FI")
   $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
        method: "GET",
        success: function(response) {
          console.log(response.items[0].volumeInfo.title);
          console.log(response.items[0].volumeInfo.authors[0]);                                                
   $("#gen2").html(response.items[0].volumeInfo.title);
       
   
        
    }
   });
});
});