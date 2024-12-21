<template>
  <el-card class="orders-card">
    <template #header>
      <div class="card-header">
        <h2>所有订单</h2>
      </div>
    </template>
    <div class="orders-content">
      <p>订单列表内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.orders-card {
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

.orders-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .orders-card {
    margin: 10px;
  }
}
</style>