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
    console.log("👍👍👍 Your Arrays are Equal!");
  } else {
    console.log("🫵🫵🫵 Your Arrays are not the same.");
  }
};

const middle = (array) => {
  let newArray = [];
  if (array.length <= 1) {
    newArray = [];
  } else if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1]);
    newArray.push(array[array.length / 2]);
  } else {
    newArray.push(array[(array.length - 1) / 2]);
  }
  return newArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]);
