<template>
  <el-card class="manage-card">
    <template #header>
      <div class="card-header">
        <h2>商品管理</h2>
      </div>
    </template>
    <div class="manage-content">
      <p>商品管理内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.manage-card {
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

.manage-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .manage-card {
    margin: 10px;
  }
}
</style>