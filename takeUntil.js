const takeUntil = function (array, callback) {
  let newArray = [];
  for (a of array) {
    if (!callback(a)) {
      newArray.push(a);
    } else {
      return newArray;
    }
  }
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

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

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
