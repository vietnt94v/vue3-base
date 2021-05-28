<template>
  <div class="todo py-3">
    <div class="container">
      This is todo page
      {{ count }}
      <button @click="increment" class="btn">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Todo',
  components: {},
  setup() {
    const store = useStore()

    return {
      count: computed(() => store.state.todo.count),
      increment: () => store.dispatch('increment')
    }
  }
})
</script>
