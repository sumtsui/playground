// https://github.com/magicmark/jest-how-do-i-mock-x/tree/master/src/function-in-same-module

// import * as greeting from '../greeting';
const greeting = require('./greeting');

describe('mocking a function in the same module with exports', () => {
  it('prints default greeting', () => {
    expect(greeting.getGreeting()).toBe('hello world!');
  });

  it('prints a greeting with a mock planet 1', () => {
    const mock = jest
      .spyOn(greeting, 'getPlanet')
      .mockImplementation(() => 'mars');
    expect(greeting.getGreeting()).toBe('hello mars!');
    expect(mock).toBeCalledTimes(1);
    mock.mockRestore();
  });

  it('prints a greeting with a mock planet 1', () => {
    const mock = jest
      .spyOn(greeting, 'getPlanet')
      .mockImplementation(() => 'jupiter');
    expect(greeting.getGreeting()).toBe('hello jupiter!');
    mock.mockRestore();
  });

  it('goes back to default', () => {
    expect(greeting.getGreeting()).toBe('hello world!');
  });
});
