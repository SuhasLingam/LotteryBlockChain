// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract lottery {
    address public manager;
    address payable[] public participants;

    // A modifier is used to modify the behavior of functions in a contract.
    // The function body is executed only if the modifier’s conditions are met.
    modifier OnlyManager() {
        require(manager == msg.sender, "Only Manager can Modify");
        _;
    }

    // The constructor is called when the contract is created.
    // The 'msg.sender' is the address of the contract creator.
    constructor() {
        manager = payable(msg.sender);
    }

    // This function is called whenever Ether is sent to the contract.
    // The function will only execute if the value sent is less than or equal to 5 Ether.
    receive() external payable {
        require(msg.value == 2, "2 ether is required");
        participants.push(payable(msg.sender));
    }

    // This function returns the contract's current balance.
    // It can only be called by the contract's manager.
    function showBal() public view OnlyManager returns (uint) {
        return address(this).balance;
    }

    // This function generates a pseudo-random number using the hash of the current block.
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

    // This function selects a winner from the participants array and transfers the contract's balance to the winner.
    // The function can only be called by the contract's manager.
    function selectWinner() public OnlyManager {
        require(participants.length >= 3);
        uint index = random() % participants.length;
        address payable winner = payable(participants[index]);
        winner.transfer(showBal());
        participants = new address payable[](0); // to empty the Dynamic array after Winner gets the prize
    }
}
