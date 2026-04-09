class FrontendWallet {
    constructor() {
        this.provider = window.ethereum;
        this.account = null;
        this.balance = 0;
    }

    async connectWallet() {
        if (!this.provider) throw new Error("No wallet detected");
        const accounts = await this.provider.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
        await this.getBalance();
        return this.account;
    }

    async getBalance() {
        const bal = await this.provider.request({
            method: "eth_getBalance",
            params: [this.account, "latest"]
        });
        this.balance = (parseInt(bal) / 1e18).toFixed(4);
        return this.balance;
    }

    getAccountInfo() {
        return { address: this.account, balance: this.balance };
    }
}

export default FrontendWallet;
