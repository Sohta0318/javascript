// Importing module
// NOT need to be .js sometimes you need .js
// Export will be first (top)
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
// console.log('Importing module');
// // console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';  NOT use this
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

console.log('---------------');
///////////////////////////////////
//////////////////////////////////
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('apples', 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

console.log('--------------------------');
//////////////////////////////////////////
//////////////////////////////////////////

// // Export  for node.js
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//   );
// }

// // Import  for node.js
// const {addToCart} = require('./shoppingCart.js')

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'hey';
}
