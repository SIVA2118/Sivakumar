"use strict";

$(document).ready(function() {

  var total = 0;
  var $orderTextarea = $("#order_textarea");
  var $totalDiv = $("#total");

  
  $("ul img").each(function() {
    var $image = $(this);
    var price = parseInt($image.attr("data-price"));

   
    $image.hover(
      function() {
        
        $image.css("border", "2px solid blue");
      },
      function() {
        
        $image.css("border", "none");
      }
    );

   
    $image.click(function(evt) {
         var altText = $image.attr("alt");
      total += price;
      $orderTextarea.val($orderTextarea.val() + altText + " - RS" + price + "\n");
      $totalDiv.text("Total: RS" + total.toFixed(2));

      
      evt.preventDefault();
    }); 
  }); 

  $("#place_order").click(function() {
    window.open("file:///C:/Users/Lenovo/Desktop/FoodsWeb/PayOrder.html");
  }); 

  
  $("#clear_order").click(function() {
  
    total = 0;
    $orderTextarea.val("");
    $totalDiv.text("Total: RS" + total.toFixed(2));
  }); 
}); 