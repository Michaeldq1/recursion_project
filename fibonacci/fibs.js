const fibs = (n) => {
  let fibArray = [];

  if (n == 2) {
    fibArray = [0, 1];
  } else if (n < 2) {
    return "Please enter a positive integer greater than 1.";
  } else {
    for (let i = 0; i < n; i++) {
      i > 1
        ? fibArray.push(fibArray[i - 1] + fibArray[i - 2])
        : fibArray.push(i);
    }
  }
  return fibArray;
};

console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
