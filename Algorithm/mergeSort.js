const mergeSort = function (arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let list = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      list.push(left.shift());
    } else {
      list.push(right.shift());
    }
  }
  // 빈배열
  list = list.concat(left, right);
  return list;
};
