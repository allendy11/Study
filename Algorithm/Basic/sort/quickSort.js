const quickSort = function (arr, callback) {
  if (!callback) callback = (el) => el; // callback 함수 유무
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  let left = [];
  let right = [];
  let num = callback(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (num < callback(arr[i])) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  let _left = quickSort(left);
  let _right = quickSort(right);
  // return quickSort(left).concat(arr[0],quickSort(right))
  return _left.concat(arr[0], _right);
};
