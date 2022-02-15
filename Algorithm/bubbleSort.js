const bubbleSort = function (arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let cnt = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        cnt++;
      }
    }
    if (cnt === 0) {
      break;
    }
  }
  return arr;
};
