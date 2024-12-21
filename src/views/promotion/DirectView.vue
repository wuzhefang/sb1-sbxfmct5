<template>
  <el-card class="direct-card">
    <template #header>
      <div class="card-header">
        <h2>直通车</h2>
      </div>
    </template>
    <div class="direct-content">
      <p>直通车推广内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.direct-card {
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

.direct-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .direct-card {
    margin: 10px;
  }
}
</style>