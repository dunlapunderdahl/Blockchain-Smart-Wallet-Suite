// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WalletRecovery {
    mapping(address => bytes32) public recoveryHashes;
    mapping(address => address[]) public recoveryContacts;
    
    function setRecoveryHash(bytes32 hash) external {
        recoveryHashes[msg.sender] = hash;
    }
    
    function addRecoveryContact(address contact) external {
        recoveryContacts[msg.sender].push(contact);
    }
    
    function verifyRecovery(bytes32 hash) external view returns(bool) {
        return recoveryHashes[msg.sender] == hash;
    }
}
