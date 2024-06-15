import fetchData from '../http';

test('Check http error', () => {
  const url = 'https://server/user/100';

  expect(() => { fetchData(url); }).toThrow(url);
});