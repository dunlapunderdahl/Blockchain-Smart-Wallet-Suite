import { ethers } from "ethers";

class TransactionSigner {
    constructor(privateKey) {
        this.wallet = new ethers.Wallet(privateKey);
    }

    async signTransaction(to, value, gasLimit, gasPrice) {
        const tx = {
            to,
            value: ethers.parseEther(value),
            gasLimit,
            gasPrice: ethers.parseUnits(gasPrice, "gwei"),
            nonce: await this.wallet.getNonce(),
            chainId: 1
        };
        return await this.wallet.signTransaction(tx);
    }

    async signMessage(message) {
        return await this.wallet.signMessage(message);
    }
}

export default TransactionSigner;
