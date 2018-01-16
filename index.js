var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random()*100) + 1;
  var item_obj = {[item]: price};
  cart.push(item_obj);
  console.log(`${item} has been added to your cart.`);
  return cart;

}

 function viewCart() {
   if (cart.length === 0) {
   console.log( "Your shopping cart is empty.")}
   else {
   var str = "In your cart, you have ";
   for (var i = 0; i < cart.length; i ++) {
     var item = cart[i];
     var key = Object.keys(item);
     var price = item[key];
     if (cart.length === 1) {
         str += `${key} at $${price}.`;
     } else if (i === (cart.length - 1)) {
         str += `and ${key} at $${price}.`;
     } else if (cart.length === 2) {
         str += `${key} at $${price} `;
     } else {
         str += `${key} at $${price}, `;
     }
   }
 
   console.log(str);
  }
 }

function total() {
  var sum = 0;
  
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      sum += cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart.hasOwnProperty([item])){
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
