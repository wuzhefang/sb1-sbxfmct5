<template>
  <el-card class="traffic-card">
    <template #header>
      <div class="card-header">
        <h2>流量分析</h2>
      </div>
    </template>
    <div class="traffic-content">
      <p>流量分析内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.traffic-card {
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

.traffic-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .traffic-card {
    margin: 10px;
  }
}
</style>