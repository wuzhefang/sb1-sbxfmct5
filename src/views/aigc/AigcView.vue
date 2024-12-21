<template>
  <el-card class="aigc-card">
    <template #header>
      <div class="card-header">
        <h2>AIGC智能创意中心</h2>
      </div>
    </template>
    <div class="aigc-content">
      <p>AIGC智能创意中心内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.aigc-card {
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

.aigc-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .aigc-card {
    margin: 10px;
  }
}
</style>