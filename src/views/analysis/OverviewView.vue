<template>
  <el-card class="overview-card">
    <template #header>
      <div class="card-header">
        <h2>经营概况</h2>
      </div>
    </template>
    <div class="overview-content">
      <p>经营概况内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.overview-card {
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

.overview-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .overview-card {
    margin: 10px;
  }
}
</style>