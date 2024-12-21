<template>
  <el-card class="market-card">
    <template #header>
      <div class="card-header">
        <h2>选品广场</h2>
      </div>
    </template>
    <div class="market-content">
      <p>选品广场内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.market-card {
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

.market-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .market-card {
    margin: 10px;
  }
}
</style>