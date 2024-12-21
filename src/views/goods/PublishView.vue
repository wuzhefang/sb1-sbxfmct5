<template>
  <el-card class="publish-card">
    <template #header>
      <div class="card-header">
        <h2>商品发布</h2>
      </div>
    </template>
    <div class="publish-content">
      <p>商品发布内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.publish-card {
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

.publish-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .publish-card {
    margin: 10px;
  }
}
</style>