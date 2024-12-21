<script setup lang="ts">
import { ElCard, ElTable, ElTableColumn, ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'
import ProductDialog from '@/components/products/ProductDialog.vue'
import { useProducts } from '@/composables/useProducts'

const { t } = useI18n()

const {
  products,
  dialogVisible,
  currentProduct,
  dialogTitle,
  handleAdd,
  handleEdit,
  handleDelete,
  handleSave
} = useProducts()
</script>

<template>
  <el-card class="products-card">
    <template #header>
      <div class="card-header">
        <h2>{{ t('products.title') }}</h2>
        <el-button type="primary" @click="handleAdd">{{ t('products.add') }}</el-button>
      </div>
    </template>

    <div class="table-responsive">
      <el-table :data="products" table-layout="auto">
        <el-table-column prop="id" :label="t('products.fields.id')" width="80" />
        <el-table-column prop="name" :label="t('products.fields.name')" min-width="120" />
        <el-table-column prop="price" :label="t('products.fields.price')" width="120">
          <template #default="{ row }">
            ¥{{ row.price.toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="description" :label="t('products.fields.description')" min-width="150" show-overflow-tooltip />
        <el-table-column :label="t('products.fields.actions')" width="160" fixed="right">
          <template #default="{ row }">
            <el-button size="small" @click="handleEdit(row)">{{ t('products.edit') }}</el-button>
            <el-button size="small" type="danger" @click="handleDelete(row)">{{ t('products.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <ProductDialog
      v-model:visible="dialogVisible"
      :product="currentProduct"
      :title="dialogTitle"
      @save="handleSave"
    />
  </el-card>
</template>

<style scoped>
.products-card {
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

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .products-card {
    margin: 10px;
  }

  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .card-header h2 {
    text-align: center;
  }

  :deep(.el-button) {
    width: 100%;
  }
}
</style>