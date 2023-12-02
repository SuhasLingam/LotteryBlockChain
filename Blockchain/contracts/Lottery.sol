// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract lottery {
    address public manager;
    address payable[] public participants;

    constructor() {
        manager = payable(msg.sender);
    }

    function showBal() public view returns (uint) {
        return address(this).balance;
    }
}
