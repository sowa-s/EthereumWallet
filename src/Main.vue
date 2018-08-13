<template>
    <div>
        <NodeStatus 
            :status="this.$store.state.nodeStatus"
        />
        <Wallet
            class="component" 
            :wallet="this.$store.state.wallet" 
        />
        <History
            class="component" 
            :history="this.$store.state.wallet.history" 
        />
    </div>
</template>

<script>
import NodeStatus from './components/NodeStatus.vue'
import Wallet from './components/Wallet.vue'
import History from './components/History.vue'

export default {
    mounted() {
        setInterval((() => {
            this.$store.dispatch('nodeStatus/setUpNetworkInfo');
            this.$store.dispatch('wallet/setUpAccountInfo');
        }).bind(this), 5000); 
    },
    components: {
        NodeStatus,
        Wallet,
        History
    }
}
</script>

<style scoped>
    .component {
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>