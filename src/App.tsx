import { defineComponent } from 'vue'
import { RouterView } from 'vue-router';
import { Title } from './components/Title';

export default defineComponent({
  setup() {
    return () => (
      <div class="container">
        <Title testurl="121312123123" />
        <RouterView />
      </div>
    );
  }
})