pragma solidity ^0.7.2;

contract Box {
  uint256 private value;

  // event emitted when stored value changes
  event ValueChanged(uint256 newValue);

  // store new value in contract
  function store(uint256 newValue) public {
    value = newValue;
    emit ValueChanged(newValue);
  }

  // read stored value
  function retrieve() public view returns (uint256) {
    return value;
  }
}