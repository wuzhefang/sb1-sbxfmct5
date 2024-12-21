<script setup lang="ts">
import { ref } from 'vue'
import { ElMenu, ElMenuItem, ElIcon, ElButton, ElSelect, ElOption } from 'element-plus'
import { Menu, Language } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

defineProps<{
  isMobile: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleMenu'): void
}>()

const languages = [
  { value: 'zh', label: '中文' },
  { value: 'en', label: 'English' }
]

const handleLanguageChange = (value: string) => {
  locale.value = value
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="left-section">
        <el-button
          v-if="isMobile"
          class="menu-button"
          @click="emit('toggleMenu')"
        >
          <el-icon><Menu /></el-icon>
        </el-button>
        <h1 class="logo-text">{{ t('app.title') }}</h1>
      </div>
      <div class="right-section">
        <el-select
          v-model="locale"
          class="language-select"
          @change="handleLanguageChange"
        >
          <el-option
            v-for="lang in languages"
            :key="lang.value"
            :label="lang.label"
            :value="lang.value"
          />
        </el-select>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.right-section {
  display: flex;
  align-items: center;
}

.logo-text {
  margin: 0;
  font-size: 1.25rem;
  color: #409EFF;
}

.menu-button {
  padding: 0.5rem;
}

.language-select {
  width: 100px;
}

@media (max-width: 768px) {
  .header {
    padding: 0.5rem;
  }

  .logo-text {
    font-size: 1.1rem;
  }

  .language-select {
    width: 90px;
  }
}
</style>