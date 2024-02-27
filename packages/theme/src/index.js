import './styles/fonts.css'
import './styles/vars.css'
import './styles/base.css'
import './styles/icons.css'
import './styles/utils.css'
import './styles/components/custom-block.css'
import './styles/components/vp-code.css'
import './styles/components/vp-code-group.css'
import './styles/components/vp-doc.css'
import './styles/components/vp-sponsor.css'

// import VPBadge from './components/VPBadge.vue'
import Layout from './Layout.vue'

const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    // app.component('VPBadge', VPBadge)
  }
}

export default theme

