import * as app from './app';
import * as math from './math';
import fetchDog from './fetchDog';

// Set all module functions to jest.fn
jest.mock('./math.js');
jest.mock('./fetchDog.js');

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test('fetch dog image', () => {
  app.getDogImage('dog.ceo');
  expect(fetchDog).toHaveBeenCalledWith('dog.ceo');
});
