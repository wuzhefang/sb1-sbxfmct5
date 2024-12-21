<script setup lang="ts">
import { computed } from 'vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElIcon } from 'element-plus'
import { House, ShoppingBag, Shop, TrendCharts, Van, ShoppingCart, Promotion, DataAnalysis, Operation, VideoCamera, Monitor } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useTabsStore } from '@/stores/tabs'

const router = useRouter()
const route = useRoute()
const tabsStore = useTabsStore()

const menuItems = computed(() => [
  {
    key: 'home',
    label: '首页',
    icon: House,
    route: '/'
  },
  {
    key: 'selection',
    label: '选品',
    icon: Shop,
    children: [
      { key: 'selectionMarket', label: '选品广场', route: '/selection/market' },
      { key: 'selectionSource', label: '选品源窗', route: '/selection/source' }
    ]
  },
  {
    key: 'goods',
    label: '商品',
    icon: ShoppingBag,
    children: [
      { key: 'goodsPublish', label: '商品发布', route: '/goods/publish' },
      { key: 'goodsManage', label: '商品管理', route: '/goods/manage' }
    ]
  },
  {
    key: 'transaction',
    label: '交易',
    icon: ShoppingCart,
    children: [
      { key: 'transactionOrders', label: '所有订单', route: '/transaction/orders' },
      { key: 'transactionRefunds', label: '退货&纠纷', route: '/transaction/refunds' },
      { key: 'transactionReviews', label: '评价管理', route: '/transaction/reviews' }
    ]
  },
  {
    key: 'promotion',
    label: '推广',
    icon: Promotion,
    children: [
      { key: 'promotionDirect', label: '直通车', route: '/promotion/direct' },
      { key: 'promotionShowcase', label: '橱窗展位', route: '/promotion/showcase' },
      { key: 'promotionAlliance', label: '联盟营销', route: '/promotion/alliance' }
    ]
  },
  {
    key: 'analysis',
    label: '经营分析',
    icon: DataAnalysis,
    children: [
      { key: 'analysisOverview', label: '经营概况', route: '/analysis/overview' },
      { key: 'analysisTraffic', label: '流量分析', route: '/analysis/traffic' },
      { key: 'analysisMarket', label: '市场总览', route: '/analysis/market' },
      { key: 'analysisOrders', label: '订单明细', route: '/analysis/orders' },
      { key: 'analysisProducts', label: '商品分析', route: '/analysis/products' }
    ]
  },
  {
    key: 'integratedMarketing',
    label: '整合营销',
    icon: Operation,
    route: '/integrated-marketing'
  },
  {
    key: 'newMediaMarketing',
    label: '新媒体营销',
    icon: VideoCamera,
    route: '/new-media-marketing'
  },
  {
    key: 'aigc',
    label: 'AIGC智能创意中心',
    icon: Monitor,
    route: '/aigc'
  }
])

const handleSelect = async (key: string, keyPath: string[]) => {
  const menuItem = findMenuItem(menuItems.value, key)
  if (menuItem?.route) {
    await router.push(menuItem.route)
    // Add tab after navigation is complete
    tabsStore.addTab({
      path: menuItem.route,
      name: key,
      meta: { title: menuItem.label }
    })
  }
}

const findMenuItem = (items: any[], key: string): any => {
  for (const item of items) {
    if (item.key === key) return item
    if (item.children) {
      const found = findMenuItem(item.children, key)
      if (found) return found
    }
  }
  return null
}
</script>

<template>
  <el-menu
    class="sidebar-menu"
    :default-active="route.path"
    @select="handleSelect"
  >
    <template v-for="item in menuItems" :key="item.key">
      <!-- Submenu for items with children -->
      <el-sub-menu v-if="item.children" :index="item.key">
        <template #title>
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item 
          v-for="child in item.children"
          :key="child.key"
          :index="child.key"
        >
          {{ child.label }}
        </el-menu-item>
      </el-sub-menu>

      <!-- Regular menu items -->
      <el-menu-item v-else :index="item.key">
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped>
.sidebar-menu {
  height: 100%;
  border-right: none;
}

.el-menu-item {
  font-size: 14px;
}

:deep(.el-sub-menu .el-menu-item) {
  min-width: 0;
  padding-left: 50px !important;
}

:deep(.el-menu-item .el-icon) {
  margin-right: 8px;
}

:deep(.el-sub-menu__title .el-icon) {
  margin-right: 8px;
}
</style>