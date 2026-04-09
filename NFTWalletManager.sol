// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721 {
    function transferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external view returns(address);
}

contract NFTWalletManager {
    mapping(uint256 => bool) public lockedNFTs;
    
    event NFTTransferred(address indexed nft, uint256 indexed tokenId, address indexed to);
    event NFTLocked(uint256 tokenId);
    event NFTUnlocked(uint256 tokenId);
    
    function transferNFT(address nft, address to, uint256 tokenId) external {
        require(!lockedNFTs[tokenId], "NFT locked");
        IERC721(nft).transferFrom(msg.sender, to, tokenId);
        emit NFTTransferred(nft, tokenId, to);
    }
    
    function lockNFT(uint256 tokenId) external {
        lockedNFTs[tokenId] = true;
        emit NFTLocked(tokenId);
    }
    
    function unlockNFT(uint256 tokenId) external {
        lockedNFTs[tokenId] = false;
        emit NFTUnlocked(tokenId);
    }
}
