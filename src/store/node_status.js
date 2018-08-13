import web3api from '../web3api'

export default {
    namespaced: true,
    state: {
        "host": "",
        "mining": undefined,
        "hashrate": undefined,
        "gasprice": undefined,
    },

    mutations: {
        setHost(state, host){
            state.host = host
        },
        setMining(state, mining) {
            state.mining = mining
        },
        setHashRate(state, hashrate) {
            state.hashrate = hashrate
        },
        setGasPrice(state, gas) {
            state.gasprice = gas
        }
    },

    actions: {
        setUpNetworkInfo(context) {
            context.commit('setHost', web3api.getHost());
            web3api.isMining().then(
                isMining => context.commit('setMining', isMining)
            );
            web3api.getHashRate().then( hashRate =>
                context.commit('setHashRate', hashRate)
            );
            web3api.getGasPrice().then(gasPrice =>
                context.commit('setGasPrice',  gasPrice)
            );
        }
    }

}