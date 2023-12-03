// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract lottery {
    address public manager;
    address payable[] public participants;

    modifier OnlyManager() {
        require(manager == msg.sender, "Only Manager can Modify");
        _;
    }

    constructor() {
        manager = payable(msg.sender);
    }

    receive() external payable {
        require(msg.value <= 5, "Atleast 5 ether is required");
        participants.push(payable(msg.sender));
    }

    function showBal() public view OnlyManager returns (uint) {
        return address(this).balance;
    }

    function random() public view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(
                        block.prevrandao,
                        block.timestamp,
                        participants.length
                    )
                )
            );
    }

    function selectWinner() public view OnlyManager returns (address) {
        require(participants.length >= 3);
        uint index = random() % participants.length;
        return participants[index];
    }
}
