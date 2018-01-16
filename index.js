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
  var item_obj = {}
  item_obj = {[item]: price};
  cart.push(item_obj);
  console.log(`${item} has been added to your cart.`);
  return cart

}

/*function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1){
    var in_cart = []
    for(var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
      in_cart.push(in_cart + " at $" + cart[i][in_cart])
    }
   }
    console.log(`In your cart you have ${in_cart.join(", ")}.`)
  }
}*/

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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
