import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

export interface TabItem {
  title: string
  path: string
  name: string
  closable: boolean
}

export const useTabsStore = defineStore('tabs', () => {
  const tabs = ref<TabItem[]>([
    { title: '首页', path: '/', name: 'home', closable: false }
  ])
  const activeTab = ref('/')

  const router = useRouter()

  const addTab = (route: RouteLocationNormalized) => {
    const { path, name, meta } = route
    const title = meta?.title as string
    
    if (!tabs.value.some(tab => tab.path === path)) {
      tabs.value.push({
        title,
        path,
        name: name as string,
        closable: path !== '/'
      })
    }
    activeTab.value = path
  }

  const removeTab = (targetPath: string) => {
    const targetIndex = tabs.value.findIndex(tab => tab.path === targetPath)
    if (targetIndex === -1) return

    tabs.value = tabs.value.filter(tab => tab.path !== targetPath)
    
    if (activeTab.value === targetPath) {
      const newActiveTab = tabs.value[targetIndex - 1] || tabs.value[0]
      activeTab.value = newActiveTab.path
      router.push(newActiveTab.path)
    }
  }

  const setActiveTab = (path: string) => {
    activeTab.value = path
    router.push(path)
  }

  return {
    tabs,
    activeTab,
    addTab,
    removeTab,
    setActiveTab
  }
})