import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import './style/main.scss'
import HeaderNav from './views/HeaderNav'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        {/* 头部导航拦 */}
        <HeaderNav />
        <RouterView />
      </>
    )
  },
})
