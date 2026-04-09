class WalletSecurity {
    static encryptPrivateKey(key, password) {
        return btoa(key + password);
    }

    static decryptPrivateKey(encrypted, password) {
        return atob(encrypted).replace(password, "");
    }

    static detectPhishing(url) {
        const blacklist = ["phish.com", "fakewallet.io"];
        return blacklist.some(d => url.includes(d));
    }

    static generateSecurePassword() {
        return Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 12);
    }
}

export default WalletSecurity;
