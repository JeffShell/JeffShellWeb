import { defineComponent } from 'vue'
import './css/index.scss'
import userHeader from '@/views/HomeView/image/userHeader.jpg'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <main class="mainHomeView">
        <img class="mainHomeView_userHeader" src={userHeader} />
        <div class="mainHomeView_myIntroduce">
          <h1>JeffShell</h1>
          <p>这是个人博客，专门存放笔记以及一些照片。</p>
        </div>
      </main>
    )
  },
})
