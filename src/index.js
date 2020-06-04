/* const bubbleSort = (arr) => {
  let loop = arr.length;
  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < loop; j++) {
      if (arr[j] > arr[j + 1]) {
        let buffer = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = buffer;
      }
    }
  }
  return arr;
} */
const bubbleSort = (arr, sort = 'ascending') => {
  if (sort === 'descending') {
    let loop = arr.length;
    for (let i = 0; i < loop; i++) {
      for (let j = 0; j < loop; j++) {
        if (arr[j] < arr[j + 1]) {
          let buffer = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = buffer;
        }
      }
    }
    return arr;
  } else{
    let loop = arr.length;
    for (let i = 0; i < loop; i++) {
      for (let j = 0; j < loop; j++) {
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