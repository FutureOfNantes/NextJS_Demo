const DidForDases = artifacts.require("DidForDases");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DidForDases", function (/* accounts */) {
  describe("Initial deployment", async () => {
    it("should assert true", async function () {
      await DidForDases.deployed();
      return assert.isTrue(true);
    });

    it("was deployed and the initial value is 10", async () => {
      const dfd = await DidForDases.deployed();
      const maxEntities = await dfd.maxEntities();
      assert.equal(maxEntities, 10, 'Initial state should be 10');
    });

  });

  describe("Functionality", () => {
    it("should store the value 15", async () => {
      // get subject
      const dfd = await DidForDases.deployed();
   
      // change the subject
      await dfd.changeNumberEntities(15, { from: accounts[0] });
   
      // verify we changed the subject
      const maxEntities = await dfd.maxEntities;
      assert.equal(maxEntities, 15, `${maxEntities} was not stored!`);
      });
    });

});

