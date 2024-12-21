<template>
  <el-card class="integrated-card">
    <template #header>
      <div class="card-header">
        <h2>整合营销</h2>
      </div>
    </template>
    <div class="integrated-content">
      <p>整合营销内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.integrated-card {
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

.integrated-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .integrated-card {
    margin: 10px;
  }
}
</style>