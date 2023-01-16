const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [4] for [2,4]", () => {
    assert.deepEqual(tail([2, 4]), [4]);
  });
  it("returns [5,6,7] for [4,5,6,7]", () => {
    assert.deepEqual(tail([4, 5, 6, 7]), [5, 6, 7]);
  });
});
