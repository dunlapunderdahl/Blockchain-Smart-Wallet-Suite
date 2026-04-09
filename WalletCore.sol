// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WalletCore {
    address public walletOwner;
    mapping(address => bool) public authorizedUsers;
    
    event WalletInitialized(address indexed owner);
    event UserAuthorized(address indexed user);
    event UserRevoked(address indexed user);
    
    constructor() {
        walletOwner = msg.sender;
        emit WalletInitialized(msg.sender);
    }
    
    modifier onlyOwner() {
        require(msg.sender == walletOwner, "Not wallet owner");
        _;
    }
    
    function authorizeUser(address user) external onlyOwner {
        authorizedUsers[user] = true;
        emit UserAuthorized(user);
    }
    
    function revokeUser(address user) external onlyOwner {
        authorizedUsers[user] = false;
        emit UserRevoked(user);
    }
    
    function validateCaller() external view returns(bool) {
        return msg.sender == walletOwner || authorizedUsers[msg.sender];
    }
}
