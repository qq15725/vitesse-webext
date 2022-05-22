import { createApp } from 'vue'
import { createVeno } from 'veno-ui'
import App from './Options.vue'
import 'veno-ui/styles'

const app = createApp(App)
const veno = createVeno()
app.use(veno).mount('#app')
