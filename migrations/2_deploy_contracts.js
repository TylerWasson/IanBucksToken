const IanBucksToken = artifacts.require("IanBucksToken");

module.exports = function(deployer) {
  deployer.deploy(IanBucksToken);
};
