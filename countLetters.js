const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let letterCounter = {};
  let stringLowerCase = string.toLowerCase();
  for (letter of stringLowerCase) {
    if (!letterCounter[letter]) {
      letterCounter[letter] = 1;
    }

    letterCounter[letter] += 1;
  }

  return letterCounter;
};

console.log(countLetters("DanielYuan"));
