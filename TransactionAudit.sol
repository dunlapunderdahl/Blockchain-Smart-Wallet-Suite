// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TransactionAudit {
    struct TxRecord {
        address from;
        address to;
        uint256 amount;
        uint256 time;
        bool risky;
    }
    
    TxRecord[] public auditLogs;
    
    event TxAudited(uint256 indexed id, address indexed from, bool risky);
    
    function recordTransaction(address to, uint256 amount, bool isRisky) external {
        auditLogs.push(TxRecord(msg.sender, to, amount, block.timestamp, isRisky));
        emit TxAudited(auditLogs.length - 1, msg.sender, isRisky);
    }
    
    function getAuditCount() external view returns(uint256) {
        return auditLogs.length;
    }
}
