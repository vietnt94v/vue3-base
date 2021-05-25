<template>
  <div class="h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
  setup() {}
})
</script>
