const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
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
module.exports = middle;
