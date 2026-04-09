class PrivacyEncoder {
    static encodeAddress(address) {
        if (!address) return "";
        return address.slice(0, 6) + "****" + address.slice(-4);
    }

    static encryptData(data, key) {
        return btoa(data + key);
    }

    static decryptData(encrypted, key) {
        return atob(encrypted).replace(key, "");
    }

    static maskAmount(amount) {
        return "*** " + amount.slice(-2) + " USD";
    }
}

export default PrivacyEncoder;
