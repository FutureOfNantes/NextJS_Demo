const DidForDases = artifacts.require("DidForDases");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DidForDases", function (/* accounts */) {
  it("should assert true", async function () {
    await DidForDases.deployed();
    return assert.isTrue(true);
  });
});
