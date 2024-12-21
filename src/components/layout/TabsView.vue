<template>
  <div class="tabs-container">
    <el-tabs
      v-model="tabsStore.activeTab"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="tab in tabsStore.tabs"
        :key="tab.path"
        :label="tab.title"
        :name="tab.path"
        :closable="tab.closable"
      />
    </el-tabs>
  </div>
  <div class="tab-content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useTabsStore } from '@/stores/tabs'
import { ElTabs, ElTabPane } from 'element-plus'

const tabsStore = useTabsStore()

const handleTabClick = (tab: any) => {
  tabsStore.setActiveTab(tab.props.name)
}

const handleTabRemove = (targetPath: string) => {
  tabsStore.removeTab(targetPath)
}
</script>

<style scoped>
.tabs-container {
  background: #fff;
  padding: 6px 6px 0;
  border-bottom: 1px solid #dcdfe6;
}

.tab-content {
  padding: 0;
  height: calc(100% - 41px);
  overflow-y: auto;
}

:deep(.el-tabs__header) {
  margin: 0;
}
</style>