// using Open Zeppelin Test Environment with Mocha and Chai

// load dependencies
const { accounts, contract } = require("@openzeppelin/test-environment")
const { expect } = require("chai")

// load compiled artifacts
const Box = contract.fromArtifact("Box")

// start test block
describe("Box", function () {
  const [ owner ] = accounts

  beforeEach(async function() {
    // deploy new Box contract for each test
    this.contract = await Box.new({ from: owner })
  })

  // test case
  it("retrieve returns a value previously stored", async function() {
    // store value, only owner can perform this
    await this.contract.store(42, { from: owner })

    // expect test to return the same
    // NOTE: must convert 256-bit int to string
    expect((await this.contract.retrieve()).toString()).to.equal("42")
  })
})