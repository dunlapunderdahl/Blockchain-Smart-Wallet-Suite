class GasCalculator {
    constructor(provider) {
        this.provider = provider;
    }

    async getGasPrice() {
        const gas = await this.provider.request({ method: "eth_gasPrice" });
        return (parseInt(gas) / 1e9).toFixed(2);
    }

    calculateTxCost(gasPrice, gasLimit) {
        return (parseFloat(gasPrice) * gasLimit / 1e9).toFixed(6);
    }

    optimizeGas(gasPrice) {
        const fast = parseFloat(gasPrice) * 1.2;
        const standard = parseFloat(gasPrice);
        const slow = parseFloat(gasPrice) * 0.8;
        return { fast: fast.toFixed(2), standard: standard.toFixed(2), slow: slow.toFixed(2) };
    }
}

export default GasCalculator;
