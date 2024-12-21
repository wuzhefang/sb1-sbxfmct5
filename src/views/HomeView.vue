<script setup lang="ts">
import { ElCard } from 'element-plus'
</script>

<template>
  <el-card class="home-card">
    <template #header>
      <h2>Welcome to Vue 3 SPA</h2>
    </template>
    <p>This is the home page of our Vue 3 Single Page Application.</p>
  </el-card>
</template>

<style scoped>
.home-card {
  margin: 20px;
}
</style>