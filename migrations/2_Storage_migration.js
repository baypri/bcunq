const StorageMigrations = artifacts.require("Storage");

module.exports = function(deployer) {
  deployer.deploy(StorageMigrations);
};
