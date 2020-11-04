// scripts/index.js
module.exports = async function main(callback) {
  try {
    // Our code will go here
    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)

    // Truffle contract abstraction to interact with Box contract
    const Box = artifacts.require("Box")
    const box = await Box.deployed()

    // call the retrive() function of deployed Box contract
    value = await box.retrieve()
    console.log("Box value is: ", value.toString())

    // send a transaction to store() function of deployed Box contract
    await box.store(23)

    //call retrieve() function
    value = await box.retrieve()
    console.log("Box value is: ", value.toString())

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
}