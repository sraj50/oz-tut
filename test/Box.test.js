// Unit testing Truffle with Chai and Open Zeppelin Test Helpers

// load dependencies
const { test, expect } = require("chai")

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")

// load compiled artifacts
const Box = artifacts.require("Box")

// start test block
contract("Box", function([owner, other]) {

  // use large integers ('big number')
  const value = new BN("42")

  beforeEach(async function() {
    // deploy new Box contract for each test
    this.box = await Box.new({ from: owner })
  })

  // test case 1: retrieve value stored
  it("retrieve returns a value previously stored", async function() {
    // store value
    await this.box.store(value, { from: owner })

    // expect test value returned is the same one
    // NOTE: comparing large integer, no conversion required
    expect(await this.box.retrieve()).to.be.bignumber.equal(value)
  })

  // test case 2: event ValueChange emitted
  it("store emits an event", async function() {
    const receipt = await this.box.store(value, { from: owner })

    // expect that event emitted when value is changed
    expectEvent(receipt, "ValueChanged", { newValue: value })
  })

  // test case 3: only owner can store value
  it("non owner cannot store a value", async function() {
    // test a transaction reverts
    await expectRevert(
      this.box.store(value, { from: other }),
      "Ownable: caller is not the owner"
    )
  })
})