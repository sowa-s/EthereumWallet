<template>
    <b-card-group deck>
    <b-card no-body header="<b>Node Status</b>">
        <b-list-group flush>
        <b-list-group-item href="#">Host <span class="value">{{ status.host }}</span></b-list-group-item>
        <b-list-group-item href="#">IsMining? <span class="value">{{ status.mining }}</span></b-list-group-item>
        <b-list-group-item href="#">HashRate <span class="value">{{ status.hashrate }}</span></b-list-group-item>
        <b-list-group-item href="#">GasPrice <span class="value">{{ status.gasprice }}</span></b-list-group-item>
        </b-list-group>
    </b-card>
    </b-card-group>
        
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('nodeStatus/setUpNetworkInfo');
        },

        props: {
            status: Object
        },

        methods: {
            change(){
                this.$store.dispatch('nodeStatus/setUpNetworkInfo');
            }
        }
        
    }
</script>


<style scoped>
    .value {
        float: right;
    }
</style>
