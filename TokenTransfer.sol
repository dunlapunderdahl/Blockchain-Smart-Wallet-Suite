// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns(bool);
    function balanceOf(address account) external view returns(uint256);
}

contract TokenTransfer {
    address public immutable walletCore;
    
    event TokenSent(address indexed token, address indexed to, uint256 amount);
    
    constructor(address core) {
        walletCore = core;
    }
    
    function sendToken(address token, address to, uint256 amount) external {
        require(to != address(0), "Invalid address");
        require(amount > 0, "Zero amount");
        
        IERC20(token).transfer(to, amount);
        emit TokenSent(token, to, amount);
    }
    
    function getTokenBalance(address token, address account) external view returns(uint256) {
        return IERC20(token).balanceOf(account);
    }
}
