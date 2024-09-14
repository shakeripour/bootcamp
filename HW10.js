const shoppingCart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];

function calculateTotalReduce(cart, discount = 0) {
  const total = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);
  return discount > 0 ? total - (total * discount/100) : total;
}

function calculateTotalLoop(cart, discount = 0) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return discount > 0 ? total - (total * discount/100) : total;
}

console.log("Total (reduce):", calculateTotalReduce(shoppingCart).toFixed(2));
console.log("Total by 10% discount(reduce):", calculateTotalReduce(shoppingCart, 10).toFixed(2));
console.log("Total (loop):", calculateTotalLoop(shoppingCart).toFixed(2));
console.log("Total by 10% discount(loop):", calculateTotalLoop(shoppingCart, 10).toFixed(2));