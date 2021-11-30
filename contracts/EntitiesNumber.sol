// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./DidForDases.sol";

//Contract to access and change the number of Entities in the list
contract EntitiesNumber {
    function callChangeNumberEntities(address _dfd, uint _maxNumber) public {
        DidForDases dfd = DidForDases(_dfd);
        //Change the number of Entities by Inter-Contract Execution
        dfd.changeNumberEntities(_maxNumber);
    }
}