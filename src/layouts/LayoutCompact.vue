<template>
  <Header />
  <div>compact-------------</div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
  setup() {
    console.log('layout compact')
  }
})
</script>
