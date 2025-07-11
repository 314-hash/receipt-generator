// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ReceiptLogger
 * @dev Emits an event whenever a hashed receipt is logged.
 *      Storing only the hash keeps the on-chain data minimal and privacy-preserving.
 */
contract ReceiptLogger {
    event ReceiptLogged(address indexed sender, string receiptHash, uint256 timestamp);

    function logReceipt(string calldata receiptHash) external {
        emit ReceiptLogged(msg.sender, receiptHash, block.timestamp);
    }
}
