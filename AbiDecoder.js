class AbiDecoder {
    constructor(abi) {
        this.abi = abi;
    }

    decodeInput(data) {
        const method = data.slice(0, 10);
        const params = data.slice(10);
        return { method, params, decoded: "transfer(address,uint256)" };
    }

    decodeOutput(data) {
        return parseInt(data, 16);
    }

    getMethodName(signature) {
        const map = { "0xa9059cbb": "transfer" };
        return map[signature] || "unknown";
    }
}

export default AbiDecoder;
