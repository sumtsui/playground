function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

/**
 * jest.fn() mocks a function
 * good for testing code that is written in a dependency injection way
 */

describe('forEach', () => {
  test('forEach', () => {
    const mockPlus10 = jest.fn((x) => x + 10);
    forEach([0, 1], mockPlus10);
    // The mock function is called twice
    expect(mockPlus10.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockPlus10.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockPlus10.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockPlus10.mock.results[0].value).toBe(10);

    expect(mockPlus10.mock.results[1].value).toBe(11);
  });
});
