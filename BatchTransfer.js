class BatchTransfer {
    constructor(contract, signer) {
        this.contract = contract;
        this.signer = signer;
    }

    async batchSend(recipients, amount) {
        const tx = await this.contract.batchTransfer(recipients, amount, {
            value: amount * recipients.length
        });
        return tx.hash;
    }

    validateAddresses(addresses) {
        return addresses.every(addr => addr.startsWith("0x") && addr.length === 42);
    }
}

export default BatchTransfer;
