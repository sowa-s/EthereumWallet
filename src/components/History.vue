<template>
    <b-card-group deck>
    <b-card no-body header="<b>Transaction Hisotory</b>">
        <b-list-group flush>
        <b-list-group-item v-for="(hist, index) in history" :key="index">
            {{ hist }}
        </b-list-group-item>
        </b-list-group>
    </b-card>

    </b-card-group>
</template>

<script>
    export default {
        props: {
            history: Array
        }
    }
</script>
