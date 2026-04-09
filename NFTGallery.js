class NFTGallery {
    constructor(provider, contractAddress) {
        this.provider = provider;
        this.contract = contractAddress;
        this.nfts = [];
    }

    async fetchNFTs(owner) {
        const mockNFTs = [
            { tokenId: 1, name: "Genesis NFT", image: "https://example.com/1.png" },
            { tokenId: 2, name: "Wallet Pass", image: "https://example.com/2.png" }
        ];
        this.nfts = mockNFTs;
        return mockNFTs;
    }

    getNFTMetadata(tokenId) {
        return this.nfts.find(n => n.tokenId === tokenId);
    }
}

export default NFTGallery;
