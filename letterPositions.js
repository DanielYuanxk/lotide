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

const letterPositions = function (sentence) {
  const results = {};
  const sentenceLower = sentence.toLowerCase();

  for (let i = 0; i < sentenceLower.length; i++) {
    if (sentenceLower[i] !== " ") {
      if (!results[sentenceLower[i]]) {
        results[sentenceLower[i]] = [];
      }
      results[sentenceLower[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
