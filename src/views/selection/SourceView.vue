<template>
  <el-card class="source-card">
    <template #header>
      <div class="card-header">
        <h2>选品源窗</h2>
      </div>
    </template>
    <div class="source-content">
      <p>选品源窗内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.source-card {
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

.source-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .source-card {
    margin: 10px;
  }
}
</style>