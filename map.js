const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
const results1 = map(words, (word) => (word = word[0]));
const results2 = map(words, (word) => (word = "hey"));
const results3 = map(words, (word) => "hi bch");
console.log(results1);
assertEqual(eqArrays(results1, ["g", "c", "t", "m", "t"]), true);
assertEqual(eqArrays(results2, ["hey", "hey", "hey", "hey", "hey"]), true);
assertEqual(
  eqArrays(results3, ["hi bch", "hi bch", "hi bch", "hi bch", "hi bch"]),
  true
);
