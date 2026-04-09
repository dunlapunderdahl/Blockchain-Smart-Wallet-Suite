// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MultiSignWallet {
    address[] public signers;
    uint256 public requiredSignatures;
    mapping(uint256 => mapping(address => bool)) public signatures;
    
    struct Transaction {
        address to;
        uint256 value;
        bool executed;
    }
    
    Transaction[] public transactions;
    
    constructor(address[] memory _signers, uint256 _required) {
        signers = _signers;
        requiredSignatures = _required;
    }
    
    function submitTransaction(address to, uint256 value) external returns(uint256) {
        transactions.push(Transaction(to, value, false));
        return transactions.length - 1;
    }
    
    function signTransaction(uint256 txId) external {
        signatures[txId][msg.sender] = true;
    }
}
