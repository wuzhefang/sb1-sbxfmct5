<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Vue 3 SPA. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1rem;
  background-color: #f5f7fa;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>