// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract lottery {
    address public manager;
    address payable[] public participants;

    // modifier OnlyManager() {
    //     require(manager == msg.sender, "Only Manager can Modify");
    //     _;
    // }

    constructor() {
        manager = payable(msg.sender);
    }

    receive() external payable {
        require(msg.value <= 5, "Atleast 5 ether is required");
        participants.push(payable(msg.sender));
    }

    function showBal() public view returns (uint) {
        return address(this).balance;
    }
}
