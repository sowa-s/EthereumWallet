import web3api from '../web3api'

export default {
    namespaced: true,
    state: {
        "address": "",
        "balance": undefined,

        "sendWeiAmount": 0,
        "estimateGas": 0,

        "error": undefined,
        "success": undefined,
        "waitTransaction": false,

        "history": []
    },

    mutations: {
        setBalance(state, balance){
            state.balance = balance;
        },
        setAddress(state, addr) {
            state.address = addr;
        },
        setSendWeiAmount(state, wei) {
            state.sendWeiAmount = wei;
        },
        setEstimateGas(state, gas) {
            state.estimateGas = gas;
        },

        setError(state, err) {
            state.error = err;
        },
        setSuccess(state, suc){
            state.success = suc;
        },
        setWaitTransaction(state, isWait){
            state.waitTransaction = isWait;
        },
        pushHistory(state, transaction) {
            state.history.unshift(transaction);
        }
    },

    actions: {
        setUpAccountInfo(context) {
            context.commit('setAddress', web3api.getAddress());
            web3api.getBalance().then(
                b => context.commit('setBalance', b)
            );
        },

        setUpConfirm(context, {from, to, sendEth}) {
            context.commit('setError', undefined);
            context.commit('setSuccess', undefined);

            const sendWei = web3api.toWei(sendEth);
            context.commit('setSendWeiAmount', sendWei);
           
            web3api.estimateGas({
                from: from,
                to: to,
                value: sendWei
            }).then(
                gas => context.commit('setEstimateGas', gas)
            ).catch(
                err => context.commit('setError', err.toString())
            );
            
        },

        sendTransaction(context, {from, to, wei, gas}) {
            context.commit('setError', undefined);
            context.commit('setSuccess', undefined);
            context.commit('setWaitTransaction', true);

            web3api.sendTransaction({
                from: from,
                to: to,
                value: wei,
                gas: gas
            }).then(success => {
                context.commit('setWaitTransaction', false);
                context.commit('setSuccess', success);
                web3api.getTransactionFromHash(success["transactionHash"]).then(
                    tr => context.commit('pushHistory', tr)
                );
            }).catch(
                err => {
                    context.commit('setWaitTransaction', false);
                    context.commit('setError', err.toString());
                }
            );
        }
    }

}