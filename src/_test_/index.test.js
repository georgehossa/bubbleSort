const bubbleSort = require('../index.js');

describe('Test Bubble Sort:', () => {
  it('must sort in ascending order', () => {
    expect(bubbleSort([3,5,10,3,3])).toEqual([3,3,3,5,10]);
    expect(bubbleSort([-3,-2,0,2,3,-1,1])).toEqual([-3,-2,-1,0,1,2,3]);
    expect(bubbleSort([100000,100,1000])).toEqual([100,1000,100000]);
  });
  it('must sort in descending order', () => {
    expect(bubbleSort([3,5,10,3,3], 'descending')).toEqual([10,5,3,3,3]);
    expect(bubbleSort([-3,-2,0,2,3,-1,1], 'descending')).toEqual([3,2,1,0,-1,-2,-3]);
    expect(bubbleSort([100000,100,1000], 'descending')).toEqual([100000,1000,100]);
  });
});