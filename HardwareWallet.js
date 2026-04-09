class HardwareWallet {
    constructor() {
        this.connected = false;
        this.device = null;
    }

    async connectLedger() {
        this.device = "Ledger Nano X";
        this.connected = true;
        return { device: this.device, status: "connected" };
    }

    async connectTrezor() {
        this.device = "Trezor T";
        this.connected = true;
        return { device: this.device, status: "connected" };
    }

    async signWithHardware(tx) {
        return `signed_${tx}_${Date.now()}`;
    }
}

export default HardwareWallet;
