const EntitiesNumber = artifacts.require("EntitiesNumber");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("EntitiesNumber", function (/* accounts */) {
  it("should assert true", async function () {
    await EntitiesNumber.deployed();
    return assert.isTrue(true);
  });
});
