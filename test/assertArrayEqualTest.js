const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual([1, 3, 5], [1, 3, 4]);
assertArraysEqual([1, 3, 5], [1, 3, 5]);
