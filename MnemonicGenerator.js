import * as bip39 from 'bip39';

class MnemonicGenerator {
    static generate12Words() {
        return bip39.generateMnemonic(128);
    }

    static generate24Words() {
        return bip39.generateMnemonic(256);
    }

    static mnemonicToSeed(mnemonic) {
        return bip39.mnemonicToSeedSync(mnemonic).toString('hex');
    }

    static validateMnemonic(mnemonic) {
        return bip39.validateMnemonic(mnemonic);
    }
}

export default MnemonicGenerator;
