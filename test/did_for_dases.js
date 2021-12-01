const DidForDases = artifacts.require("DidForDases");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DidForDases", function (accounts) {
  describe("Initial deployment", async () => {
    it("should assert true", async function () {
      await DidForDases.deployed();
      return assert.isTrue(true);
    });
    //Verify that the maximum number of Entities is 10 at the creation
    it("was deployed and the initial value is 10", async () => {
      const dfd = await DidForDases.deployed();
      const maxEntities = await dfd.maxEntities();

      assert.equal(maxEntities, 10, 'Initial state should be 10');
    });

    //Verify that the name of the first Entity is DASES Administrator
    it("the first Entity is DASES Administrator", async () => {
      const dfd = await DidForDases.deployed();
      const en = await dfd.listOfEntities.call(0);

      assert.equal(en.entityName, 'DASES Administrator', 'First Entity name should be DASES Administrator');
    });
  });

  describe("Functionality", () => {
    //Verify that we can change the maximum number of entities from 10 to 15
    it("should store the value 15", async () => {
      const dfd = await DidForDases.deployed();
      await dfd.changeNumberEntities(15, { from: accounts[0] });

      const maxEntities = await dfd.maxEntities();
      assert.equal(maxEntities, 15, `${maxEntities} was not stored!`);
    });

    //Verify that when an entity requests to be added in the list, it is done
    it("should add the entity in the list of Entities", async () => {
      const dfd = await DidForDases.deployed();
      await dfd.idAssociation('test1', 'email1', { from: accounts[1] });
      
      const test1 = await dfd.listOfEntities.call(1);
      assert.equal(test1.publicKey, accounts[1] , test1.publicKey);
    });

    //Verify that by launching the function completeCleaning, the list of Entities is cleaned
    it("should clear the list of Entities and keep only the Admin", async () => {
      const dfd = await DidForDases.deployed();
      await dfd.idAssociation('test1', 'email1', { from: accounts[2] });
      await dfd.idAssociation('test2', 'email2', { from: accounts[3] });
      await dfd.completeCleaning( { from: accounts[0] });

      const el = await dfd.getAssociatedEntitiesList();
      assert.equal(el.length, 1, el.length);
    });

  });

});

