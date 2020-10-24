pragma solidity ^0.7.2;

contract Auth {
  address private administrator;

  constructor() public {
    // deployer of contract is administrator
    administrator = msg.sender;
  }

  function isAdministrator(address user) public view returns (bool) {
    return user == administrator;
  }
}