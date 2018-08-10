import Vue from 'vue'

import App from './components/App'

new Vue({
    el: '#app',
    components: { App },
    template: `
        <div>
            <p><input v-model="message"></p>
            <p>{{message}}</p>
        </div>
    `,
    data: {
        message: 'Hello Vue.js!!'
    }
})