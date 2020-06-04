const bubbleSort = (arr, sort = 'ascending') => {
  if (sort === 'descending') {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
          let buffer = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = buffer;
        }
      }
    }
    return arr;
  } else{
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let buffer = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = buffer;
        }
      }
    }
    return arr;
  }
}

module.exports = bubbleSort;