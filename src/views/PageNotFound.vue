<template>
  <div class="page-not-found">
    <p>404 Page Not Found!</p>
    <router-link :to="{ name: 'home' }" class="text-success"
      >Back to Home</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNotFound',
  components: {}
})
</script>
