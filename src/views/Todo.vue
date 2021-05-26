<template>
  <div class="todo">
    This is todo page
    {{ count }}
    <button @click="increment" class="btn">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Todo',
  components: {},
  setup() {
    const store = useStore()
    const count = ref()
    const increment = () => {
      store.commit('increment')
      count.value = store.state.todo.count++
    }

    return {
      count,
      increment
    }
  }
})
</script>
