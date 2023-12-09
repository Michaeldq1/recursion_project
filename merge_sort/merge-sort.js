const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, middleIndex));
  const rightArray = mergeSort(array.slice(middleIndex));

  return merge(leftArray, rightArray);
};

const merge = (leftSubarray, rightSubarray) => {
  const mergedArray = [];

  while (leftSubarray.length > 0 && rightSubarray.length > 0) {
    const arrayWithMin =
      leftSubarray[0] < rightSubarray[0] ? leftSubarray : rightSubarray;
    const minValue = arrayWithMin.shift();
    mergedArray.push(minValue);
  }

  return mergedArray.concat(leftSubarray, rightSubarray);
};

console.log(mergeSort([4, 2, 6, 8, 1, 5, 1, 0, -1]));
console.log(mergeSort([1]));
console.log(mergeSort([]));
