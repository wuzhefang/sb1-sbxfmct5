<template>
  <el-card class="showcase-card">
    <template #header>
      <div class="card-header">
        <h2>橱窗展位</h2>
      </div>
    </template>
    <div class="showcase-content">
      <p>橱窗展位内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.showcase-card {
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

.showcase-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .showcase-card {
    margin: 10px;
  }
}
</style>