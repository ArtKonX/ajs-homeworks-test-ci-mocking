import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Check send', () => {
  fetchData.mockReturnValue({});

  getLevel(100);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/100');
});

test('Checks the information about the level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '100' });

  const result = getLevel(100);
  expect(result).toBe('Ваш текущий уровень: 100');
});

test('Checks the error of the level information', () => {
  fetchData.mockReturnValue({ status: 'false' });

  const result = getLevel(100);
  expect(result).toBe('Информация об уровне временно недоступна');
});