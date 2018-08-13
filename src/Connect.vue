<template>
  <b-form-group
      id="connect"
      label="connection"
  >
    <b-alert show variant="danger" v-if="error != ''">{{ error }}</b-alert>
    <label>Node Host</label>
    <b-form-input id="host" v-model="host"></b-form-input>

    <label>Address</label>
    <b-form-input id="host" v-model="address"></b-form-input>

    <label>Unlock Password</label>
    <b-form-input id="host" v-model="password"></b-form-input>

    <b-button class="col-md-12" style="margin-top: 30px" @click="connect">
      Connect
    </b-button>
  </b-form-group>
</template>

<script>
import web3api from './web3api'

export default {
  methods: {
    connect() {
      this.$data.error = "";

      web3api.connect(this.$data.host, this.$data.address);
      try{
        web3api.unlockAccount(this.$data.password).then(
          success => {
            if(success) this.$router.push('wallet');
          }
        ).catch(
          err => this.$data.error = err.toString()
        )
      }catch(err) {
        this.$data.error = err.toString()
      }
    }
  },

  data () {
    return {
      host: '',
      address: '',
      password: '',
      error: ''
    }
  }
}
</script>
