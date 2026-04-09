class TransactionHistory {
    constructor(provider, address) {
        this.provider = provider;
        this.address = address;
        this.history = [];
    }

    async fetchHistory() {
        this.history = [
            { hash: "0x123", to: "0x456", value: "0.1 ETH", time: "2025-01-01" },
            { hash: "0x789", to: "0xabc", value: "50 USDT", time: "2025-01-02" }
        ];
        return this.history;
    }

    filterByType(type) {
        return this.history.filter(t => t.value.includes(type));
    }

    clearCache() {
        this.history = [];
    }
}

export default TransactionHistory;
