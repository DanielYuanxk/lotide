const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [4,5] for [3,4,5,6]", () => {
    assert.deepEqual(middle([3, 4, 5, 6]), [4, 5]);
  });
});
