// https://github.com/magicmark/jest-how-do-i-mock-x/tree/master/src/function-in-same-module

// import * as greeting from '../greeting';
const greeting = require('./greeting');

jest.mock('./greeting');

describe('mocking a function in the same module with exports', () => {
  greeting.getGreeting = jest.fn().mockImplementation(() => 'hello world!');

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('goes back to default', () => {
    expect(greeting.getGreeting()).toBe('hello world!');
  });
});
