import * as app from './app';
import * as math from './math';

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test('calls math.multiply', () => {
  const multiplyMock = jest.spyOn(math, 'multiply');

  // override the implementation
  multiplyMock.mockImplementation(() => 'mock');
  expect(app.doMultiply(1, 2)).toEqual('mock');

  // restore the original implementation
  /**
   * This is useful for tests within the same file, but unnecessary to do in an afterAll hook since each test file in Jest is sandboxed.
   */
  multiplyMock.mockRestore();
  expect(app.doMultiply(1, 2)).toEqual(2);
});
