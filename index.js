const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

const totalAmount = products.reduce((total, product) => total + product.price, 0);

const couponLocations = [
  { room: "Living room", amount: 5 },
  { room: "Kitchen", amount: 2 },
  { room: "Bathroom", amount: 1 },
  { room: "Master bedroom", amount: 7 },
];

const totalCoupons = couponLocations.reduce((total, location) => total + location.amount, 0);

console.log("Total Batteries:", totalBatteries);
console.log("Total Price of Products:", totalAmount);
console.log("Total Coupons:", totalCoupons);
