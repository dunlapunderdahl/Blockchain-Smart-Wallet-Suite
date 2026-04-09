class ChainSwitcher {
    constructor(provider) {
        this.provider = provider;
    }

    async switchToEthereum() {
        try {
            await this.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x1" }]
            });
        } catch (e) {
            throw new Error("Switch failed");
        }
    }

    async switchToSepolia() {
        await this.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xaa36a7" }]
        });
    }

    async getCurrentChain() {
        return await this.provider.request({ method: "eth_chainId" });
    }
}

export default ChainSwitcher;
