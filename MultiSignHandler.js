class MultiSignHandler {
    constructor(contract, signer) {
        this.contract = contract;
        this.signer = signer;
    }

    async createProposal(to, value) {
        const tx = await this.contract.submitTransaction(to, value);
        return tx.hash;
    }

    async signProposal(txId) {
        return await this.contract.signTransaction(txId);
    }

    async getSignatureStatus(txId) {
        return await this.contract.signatures(txId, this.signer);
    }
}

export default MultiSignHandler;
