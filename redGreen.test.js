import getName from './redGreen.js';

describe(' get name from object', () => {

  it('gets the name from the spots obj', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name  = getName(spot);
    expect(name).toEqual('spot');
  });
});
