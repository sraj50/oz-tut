pragma solidity ^0.7.2;

// import Auth contract
import "./access-control/Auth.sol";

// import Ownable from OZ contracts
import "@openzeppelin/contracts/access/Ownable.sol";

// Box contract inherits from Ownable contract
contract Box is Ownable {
  uint256 private value;
  Auth private auth;

  // event emitted when stored value changes
  event ValueChanged(uint256 newValue);

  constructor(Auth _auth) public {
    auth = _auth;
  }

  // store new value in contract
  function store(uint256 newValue) public {
    // require caller of contract function is administrator in Auth
    require(auth.isAdministrator(msg.sender), "Unauthorized");

    value = newValue;
    emit ValueChanged(newValue);
  }

  // read stored value
  function retrieve() public view returns (uint256) {
    return value;
  }
}