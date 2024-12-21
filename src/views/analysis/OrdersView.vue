<template>
  <el-card class="orders-analysis-card">
    <template #header>
      <div class="card-header">
        <h2>订单明细</h2>
      </div>
    </template>
    <div class="orders-analysis-content">
      <p>订单明细分析内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.orders-analysis-card {
  margin: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  margin: 0;
}

.orders-analysis-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .orders-analysis-card {
    margin: 10px;
  }
}
</style>