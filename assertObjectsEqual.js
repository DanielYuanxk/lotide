const eqObjects = function (object1, object2) {
  let same = true;
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    same = false;
  } else {
    for (key of obj1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        same = eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        same = false;
      }
    }
  }
  return same;
};

const assertObjectEquals = function (actual, expected) {
  const inspect = require("util").inspect;
  let passed = false;
  if (eqObjects(actual, expected)) {
    passed = true;
  }

  if (passed) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectEquals(shirtObject, anotherShirtObject);
assertObjectEquals(longSleeveShirtObject, anotherShirtObject);
