<template>
  <el-card class="refunds-card">
    <template #header>
      <div class="card-header">
        <h2>退货&纠纷</h2>
      </div>
    </template>
    <div class="refunds-content">
      <p>退货和纠纷内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.refunds-card {
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

.refunds-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .refunds-card {
    margin: 10px;
  }
}
</style>