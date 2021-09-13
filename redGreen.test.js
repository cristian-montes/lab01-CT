import getName from './redGreen.js';

describe(' get name from object', () => {

  it('gets the name from the spots obj', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name  = getName(spot);
    expect(name).toEqual('spot');
  });

  it('gets the name from the spots obj', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name  = getName(character);
    expect(name).toEqual('Aang');
  });
});
