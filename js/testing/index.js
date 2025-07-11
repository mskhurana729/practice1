const someOrder = {
  items: [
    { name: 'Dragon Food', price: 8, quantity: 8 },
    { name: 'Dragon Cage (small)', price: 800, quantity: 2 },
  ],
};

const orderTotal = (order) => {
  const totalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
  const shippingItem = order.items.find((x) => !!x.shippingItem);
  const shipping = totalItems > 1000 ? 0 : shippingItem.price;
  return totalItems + shipping;
};

result = orderTotal(someOrder);

// testing part

if (
  orderTotal({
    items: [
      { name: 'Dragon Food', price: 8 },
      { name: 'Dragon Cage (small)', price: 800 },
    ],
  }) !== 808
) {
  throw new Error('check fail: happy path');
}
