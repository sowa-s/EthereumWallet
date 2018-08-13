<template>
    <b-card-group deck>
    <b-card no-body header="<b>Account Info / Send Either</b>">
        <b-list-group flush>
        <b-list-group-item href="#">Address: <span class="value"> {{ wallet.address }}</span></b-list-group-item>
        <b-list-group-item href="#">balance: <span class="value"> {{ wallet.balance }} wei</span></b-list-group-item>
        <b-list-group-item>
            to: <input class="form" type="text" v-model="toAddress" />
        </b-list-group-item>
        <b-list-group-item>
            Amount(ETH): <input class="form" type="text" v-model="eth" />
        </b-list-group-item>
        <b-list-group-item>
            <div>
                <b-button id="sendButton" @click="showModal">
                SEND
                </b-button>
                <b-modal ref="myModalRef" hide-footer title="Confirm">
                <div class="d-block">
                    from <span class="confirm-content">{{ wallet.address }}</span> <br />
                    <hr />
                    to <span class="confirm-content">{{ toAddress }}</span> <br />
                    <hr />
                    gas <span class="confirm-content"> {{wallet.estimateGas}} (wei)</span> <br />
                    <hr />
                    eth <span class="confirm-content">{{ wallet.sendWeiAmount}} (wei)</span>
                </div>
                <div class="modal-footer">
                    <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-btn>
                    <b-btn class="mt-3" variant="outline-primary" block @click="send">SEND</b-btn>
                </div>
                </b-modal>
            </div>
        </b-list-group-item>
        <b-list-group-item>
            <b-alert show variant="primary" v-if="wallet.waitTransaction">トランザクションがブロックに取り込まれるのを待っています...</b-alert>
            <b-alert show variant="success" v-if="wallet.success != undefine" >Success!</b-alert>
            <b-alert show variant="danger" v-if="wallet.error != undefine" >{{ wallet.error }}</b-alert>
        </b-list-group-item>
        </b-list-group>
    </b-card>

    </b-card-group>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('wallet/setUpAccountInfo');
        },

        data(){
            return {
                toAddress: '',
                eth: '0'
            }
        },
        props: {
            wallet: Object
        },
        methods: {
            showModal () {
                this.$store.dispatch('wallet/setUpConfirm', {from: this.$props.wallet.address, to: this.$data.toAddress, sendEth: this.$data.eth});
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide()
            },

            send() {
                this.$store.dispatch('wallet/sendTransaction', {
                    from: this.$props.wallet.address, 
                    to: this.$data.toAddress, 
                    wei: this.$props.wallet.sendWeiAmount, 
                    gas: this.$props.wallet.estimateGas
                });
                this.hideModal();
            }
        }
    }
</script>

<style scoped>
    .form {
        float: right;
        text-align: right;
        width: 85%
    }
    .confirm-content {
        float: right;
    }
    .value {
        float: right;
    }
    #sendButton {
        width: 100%;
    }
</style>