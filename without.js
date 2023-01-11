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
  if (isGood) {
    console.log("Your Arrays are Equal!");
  } else {
    console.log("Your Arrays are not the same.");
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    let same = true;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        same = false;
      }
    }
    if (same) {
      newArray.push(array1[i]);
    }
  }
  console.log(newArray);
};
without([1, 3, 4], [1]);
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
