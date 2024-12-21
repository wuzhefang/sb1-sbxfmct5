<template>
  <el-card class="new-media-card">
    <template #header>
      <div class="card-header">
        <h2>新媒体营销</h2>
      </div>
    </template>
    <div class="new-media-content">
      <p>新媒体营销内容</p>
    </div>
  </el-card>
</template>

<style scoped>
.new-media-card {
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

.new-media-content {
  padding: 20px 0;
}

@media (max-width: 768px) {
  .new-media-card {
    margin: 10px;
  }
}
</style>