const fibsRec = (n) => {
  if (n == 2) {
    return [0, 1];
  } else if (n < 2) {
    return "Please enter a positive integer greater than 1.";
  }

  let fibArray = fibsRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);

  return fibArray;
};

console.log(fibsRec(-1));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
