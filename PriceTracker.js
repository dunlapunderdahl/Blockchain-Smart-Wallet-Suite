class PriceTracker {
    constructor() {
        this.api = "https://api.coingecko.com/api/v3/simple/price";
    }

    async getEthPrice() {
        const res = await fetch(`${this.api}?ids=ethereum&vs_currencies=usd`);
        const data = await res.json();
        return data.ethereum.usd;
    }

    async getTokenPrice(token) {
        const res = await fetch(`${this.api}?ids=${token}&vs_currencies=usd`);
        const data = await res.json();
        return data[token]?.usd || 0;
    }
}

export default PriceTracker;
