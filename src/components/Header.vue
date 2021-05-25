<template>
  <header class="sticky top-0 shadow-md">
    <div class="container">
      <div class="py-3">
        <router-link to="/" class="text-success">Home</router-link> |
        <router-link to="/todo" class="text-success">Todo</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
