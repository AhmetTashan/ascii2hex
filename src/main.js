import {createApp} from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
    .use(router)
    .use(BootstrapVueNext);

app.mount('#app')
