const DidForDases = artifacts.require('./DidForDases.sol');

module.exports = function(deployer) {
    deployer.deploy(DidForDases);
};
