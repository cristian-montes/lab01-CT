import { getName, copyAndPush } from './redGreen.js';

// GETTING NAMES FROM OBJECTS
describe(' get name from object', () => {

  it('gets the name from the spots obj', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name  = getName(spot);
    expect(name).toEqual('spot');
  });

  it('gets the name from the characters obj', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name  = getName(character);
    expect(name).toEqual('Aang');
  });
});


describe('copy and push', () => {

  it('push numbers to end', () => {
    const numbers = [1, 2, 3];
    const theArr  = copyAndPush(numbers, 4);
    expect(theArr).toEqual([1, 2, 3, 4]);
  });
});
