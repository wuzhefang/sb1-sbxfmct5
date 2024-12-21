<template>
  <el-card class="alliance-card">
    <template #header>
      <div class="card-header">
        <h2>联盟营销</h2>
      </div>
    </template>
    <div class="alliance-content">
      <p>联盟营销内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.alliance-card {
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

.alliance-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .alliance-card {
    margin: 10px;
  }
}
</style>