// const orderTotal = require('./order-total');
import orderTotal from './order-total';
it('Quantity', () => {
  expect(
    orderTotal({
      items: [{ name: 'Dragon Candy', price: 2, quantity: 3 }],
    })
  ).toBe(6);
});
it('No quantity specified', () => {
  expect(
    orderTotal({
      items: [{ name: 'Dragon Candy', price: 2 }],
    })
  ).toBe(2);
});
it('Happy path [Example 1]', () => {
  expect(
    orderTotal({
      items: [
        { name: 'Dragon Food', price: 8 },
        { name: 'Dragon Cage (small)', price: 800 },
      ],
    })
  ).toBe(808);
});
it('Happy path Example 2', () => {
  expect(
    orderTotal({
      items: [
        { name: 'Dragon Collar', price: 20, quantity: 1 },
        { name: 'Dragon chew toy', price: 40, quantity: 1 },
      ],
    })
  ).toBe(60);
});
