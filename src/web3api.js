import Web3 from 'web3';

class Web3API {
    connect(host, address) {
        this.host = host;
        this.address = address;
        this.web3 = new Web3();
        this.web3.setProvider(new web3.providers.HttpProvider(this.host));
    }

    unlockAccount(password){
        return this.web3.eth.personal.unlockAccount(this.address, password);
    }

    getAddress() {
        return this.address;
    }
    
    getHost() {
        return this.web3.currentProvider.host;
    }

    isMining() {
        return this.web3.eth.isMining();
    }

    getHashRate() {
        return this.web3.eth.getHashrate();
    }

    getGasPrice() {
        return this.web3.eth.getGasPrice();
    }

    getBalance() {
        return this.web3.eth.getBalance(this.address);
    }

    toWei(eth) {
        return this.web3.utils.toWei(eth);
    }

    estimateGas(callObj) {
        return this.web3.eth.estimateGas(callObj);
    }

    sendTransaction(callObj) {
        return this.web3.eth.sendTransaction(callObj);
    }

    getTransactionFromHash(hash) {
        return this.web3.eth.getTransaction(hash);
    }
}

export default new Web3API();