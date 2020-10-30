// migrations/2_deploy.js
const Box = artifacts.require("Box");
const Auth = artifacts.require("Auth")

module.exports = async function (deployer) {
  await deployer.deploy(Box);
};