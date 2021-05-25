<template>
  <div class="page-not-found h-screen">
    <div class="container">
      <div class="py-5">
        <p>404 Page Not Found!</p>
        <router-link :to="{ name: 'home' }" class="text-success">
          <i class="las la-arrow-circle-left"></i>
          Back to Home</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNotFound',
  components: {}
})
</script>
