import Main from './Main'
import Connect from './Connect'

export default {
  routes: [
    {
      path: '/', component: Connect, name: 'connect'
    },
    {
        path: '/wallet', component: Main, name: 'wallet' 
    }
  ]
}