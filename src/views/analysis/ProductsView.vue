<template>
  <el-card class="products-analysis-card">
    <template #header>
      <div class="card-header">
        <h2>商品分析</h2>
      </div>
    </template>
    <div class="products-analysis-content">
      <p>商品分析内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.products-analysis-card {
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

.products-analysis-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .products-analysis-card {
    margin: 10px;
  }
}
</style>