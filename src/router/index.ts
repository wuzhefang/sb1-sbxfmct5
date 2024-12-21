import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页'
      }
    },
    // Selection routes
    {
      path: '/selection/market',
      name: 'selectionMarket',
      component: () => import('../views/selection/MarketView.vue'),
      meta: {
        title: '选品广场'
      }
    },
    {
      path: '/selection/source',
      name: 'selectionSource',
      component: () => import('../views/selection/SourceView.vue'),
      meta: {
        title: '选品源窗'
      }
    },
    // Goods routes
    {
      path: '/goods/publish',
      name: 'goodsPublish',
      component: () => import('../views/goods/PublishView.vue'),
      meta: {
        title: '商品发布'
      }
    },
    {
      path: '/goods/manage',
      name: 'goodsManage',
      component: () => import('../views/goods/ManageView.vue'),
      meta: {
        title: '商品管理'
      }
    },
    // Transaction routes
    {
      path: '/transaction/orders',
      name: 'transactionOrders',
      component: () => import('../views/transaction/OrdersView.vue'),
      meta: {
        title: '所有订单'
      }
    },
    {
      path: '/transaction/refunds',
      name: 'transactionRefunds',
      component: () => import('../views/transaction/RefundsView.vue'),
      meta: {
        title: '退货&纠纷'
      }
    },
    {
      path: '/transaction/reviews',
      name: 'transactionReviews',
      component: () => import('../views/transaction/ReviewsView.vue'),
      meta: {
        title: '评价管理'
      }
    },
    // Promotion routes
    {
      path: '/promotion/direct',
      name: 'promotionDirect',
      component: () => import('../views/promotion/DirectView.vue'),
      meta: {
        title: '直通车'
      }
    },
    {
      path: '/promotion/showcase',
      name: 'promotionShowcase',
      component: () => import('../views/promotion/ShowcaseView.vue'),
      meta: {
        title: '橱窗展位'
      }
    },
    {
      path: '/promotion/alliance',
      name: 'promotionAlliance',
      component: () => import('../views/promotion/AllianceView.vue'),
      meta: {
        title: '联盟营销'
      }
    },
    // Analysis routes
    {
      path: '/analysis/overview',
      name: 'analysisOverview',
      component: () => import('../views/analysis/OverviewView.vue'),
      meta: {
        title: '经营概况'
      }
    },
    {
      path: '/analysis/traffic',
      name: 'analysisTraffic',
      component: () => import('../views/analysis/TrafficView.vue'),
      meta: {
        title: '流量分析'
      }
    },
    {
      path: '/analysis/market',
      name: 'analysisMarket',
      component: () => import('../views/analysis/MarketView.vue'),
      meta: {
        title: '市场总览'
      }
    },
    {
      path: '/analysis/orders',
      name: 'analysisOrders',
      component: () => import('../views/analysis/OrdersView.vue'),
      meta: {
        title: '订单明细'
      }
    },
    {
      path: '/analysis/products',
      name: 'analysisProducts',
      component: () => import('../views/analysis/ProductsView.vue'),
      meta: {
        title: '商品分析'
      }
    },
    // Marketing routes
    {
      path: '/integrated-marketing',
      name: 'integratedMarketing',
      component: () => import('../views/marketing/IntegratedView.vue'),
      meta: {
        title: '整合营销'
      }
    },
    {
      path: '/new-media-marketing',
      name: 'newMediaMarketing',
      component: () => import('../views/marketing/NewMediaView.vue'),
      meta: {
        title: '新媒体营销'
      }
    },
    // AIGC route
    {
      path: '/aigc',
      name: 'aigc',
      component: () => import('../views/aigc/AigcView.vue'),
      meta: {
        title: 'AIGC智能创意中心'
      }
    }
  ]
})

export default router