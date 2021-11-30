const DidForDases = artifacts.require('./DidForDases.sol');
const EntitiesNumber = artifacts.require('./EntitiesNumber.sol');

module.exports = function(deployer) {
    deployer.deploy(DidForDases);
    deployer.deploy(EntitiesNumber);
};
