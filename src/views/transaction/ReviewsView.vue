<template>
  <el-card class="reviews-card">
    <template #header>
      <div class="card-header">
        <h2>评价管理</h2>
      </div>
    </template>
    <div class="reviews-content">
      <p>评价管理内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.reviews-card {
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

.reviews-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .reviews-card {
    margin: 10px;
  }
}
</style>