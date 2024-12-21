<script setup lang="ts">
import { ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
</script>

<template>
  <el-card class="contact-card">
    <template #header>
      <h2>Contact Us</h2>
    </template>
    <el-form :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" type="email" />
      </el-form-item>
      <el-form-item label="Message">
        <el-input v-model="form.message" type="textarea" rows="4" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Send Message</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
.contact-card {
  margin: 20px;
}
</style>