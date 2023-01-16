const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log("👍👍👍 Your Arrays are Equal!");
  } else {
    console.log("🫵🫵🫵 Your Arrays are not the same.");
  }
};

module.exports = assertArraysEqual;
