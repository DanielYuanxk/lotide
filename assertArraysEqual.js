const eqArrays = (array1, array2) => {
  let isGood = true;
  if (array1.length != array2.length) {
    isGood = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isGood = false;
    }
  }
  return isGood;
};
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log("Your Arrays are Equal!");
  } else {
    console.log("Your Arrays are not the same.");
  }
};

assertArraysEqual([1, 3, 5], [1, 3, 4]);
assertArraysEqual([1, 3, 5], [1, 3, 5]);
