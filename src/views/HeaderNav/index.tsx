import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import './index.scss'

export default defineComponent({
  name: 'HeaderNav',
  setup() {
    return () => (
      <div id="nav">
        <div class="logo">LOGO</div>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Blog">Blog</RouterLink>
          <RouterLink to="/MovieViewLog">观影记录</RouterLink>
          <RouterLink to="/BookViewLog">读书记录</RouterLink>
        </div>
      </div>
    )
  },
})
