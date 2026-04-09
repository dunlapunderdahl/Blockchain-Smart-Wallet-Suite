// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PrivacyGuard {
    mapping(address => bytes32) public encryptedAddresses;
    
    event AddressEncrypted(address indexed user, bytes32 encrypted);
    
    function encryptAddress(address user) external {
        encryptedAddresses[user] = keccak256(abi.encodePacked(user, block.timestamp));
        emit AddressEncrypted(user, encryptedAddresses[user]);
    }
    
    function verifyEncrypted(address user, bytes32 hash) external view returns(bool) {
        return encryptedAddresses[user] == hash;
    }
}
