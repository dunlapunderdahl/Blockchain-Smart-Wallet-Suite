// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GasOptimizer {
    function batchTransfer(address[] calldata recipients, uint256 amount) external payable {
        uint256 len = recipients.length;
        for(uint256 i=0; i<len; i++) {
            (bool success,) = recipients[i].call{value: amount}("");
            require(success, "Transfer failed");
        }
    }
    
    function optimizedCall(address target, bytes calldata data) external returns(bool, bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        return (success, result);
    }
}
