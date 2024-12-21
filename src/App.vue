<script setup lang="ts">
import { ref } from 'vue'
import { ElContainer, ElAside, ElMain, ElHeader, ElFooter, ElDrawer } from 'element-plus'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
import TabsView from './components/layout/TabsView.vue'

const isMobileMenuOpen = ref(false)
const isMobile = ref(window.innerWidth <= 768)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Handle window resize
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    isMobileMenuOpen.value = false
  }
})
</script>

<template>
  <el-container class="app-container">
    <el-header>
      <TheHeader @toggle-menu="toggleMobileMenu" :is-mobile="isMobile" />
    </el-header>
    <el-container class="main-container">
      <!-- Desktop Sidebar -->
      <el-aside v-if="!isMobile" width="240px">
        <TheSidebar />
      </el-aside>
      
      <!-- Mobile Drawer -->
      <el-drawer
        v-model="isMobileMenuOpen"
        direction="ltr"
        size="240px"
        :with-header="false"
        v-if="isMobile"
      >
        <TheSidebar @select="isMobileMenuOpen = false" />
      </el-drawer>

      <el-main>
        <TabsView />
      </el-main>
    </el-container>
    <el-footer>
      <TheFooter />
    </el-footer>
  </el-container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  height: 100vh;
}

.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  overflow: hidden;
}

.el-header {
  padding: 0;
  height: auto;
  border-bottom: 1px solid #e6e6e6;
}

.el-footer {
  padding: 0;
  height: auto;
}

.el-aside {
  padding: 0;
  border-right: 1px solid #e6e6e6;
  height: 100%;
  overflow-y: auto;
}

.el-main {
  padding: 0;
  background-color: #f5f7fa;
  height: 100%;
  overflow-y: auto;
}

/* Mobile styles */
@media (max-width: 768px) {
  .el-main {
    padding: 10px;
  }

  .el-card {
    margin: 10px 0 !important;
  }

  .el-table {
    width: 100%;
    overflow-x: auto;
  }
}
</style>