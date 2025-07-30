beforeEach(() => {
  console.log('beforeEach');
});
afterEach(() => {
  console.log('afterEach');
});

test('testing', () => {
  expect(true).toBeTruthy();
});
test.only('testing', () => {
  expect(true).toBeTruthy();
});

beforeAll(() => {
  console.log('beforeAll');
});
afterAll(() => {
  console.log('afterAll');
});
