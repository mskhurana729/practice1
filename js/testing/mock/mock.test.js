const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it('mock callback', () => {
  const mockCalledBack = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCalledBack);
  expect(mockCalledBack.mock.calls.length).toBe(2);
  expect(mockCalledBack.mock.calls[0][0]).toBe(0);
  expect(mockCalledBack.mock.calls[1][0]).toBe(1);
  expect(mockCalledBack.mock.results[0].value).toBe(42);
});

it('mock return', () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce('Hello');
  const results = mock();
  const results2 = mock();
  const results3 = mock();
  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe('Hello');
});

// const fetchData = async (id) => {
//   const results = await axios.get(``);
//   return results.data;
// };

// it('mock axios', async () => {
//   jest.spyOn(axios, 'get').mockReturnValueOnce({
//     data: {
//       id: 1,
//       todo: 'Get 1M Subs',
//     },
//   });
//   const results = await fetchData(1);
//   expect(results.todo).toBe('Get 1M Subs');
// });
