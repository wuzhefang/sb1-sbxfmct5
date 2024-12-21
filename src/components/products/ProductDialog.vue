<script setup lang="ts">
import { ref } from 'vue'
import { ElDialog, ElForm, ElFormItem, ElInput, ElInputNumber, ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'
import type { Product, ProductFormData } from '@/types/product'

const { t } = useI18n()

const props = defineProps<{
  visible: boolean
  product?: Product
  title: string
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'save', data: ProductFormData): void
}>()

const formData = ref<ProductFormData>({
  name: props.product?.name || '',
  price: props.product?.price || 0,
  description: props.product?.description || '',
  isHot: props.product?.isHot
})

const handleClose = () => {
  emit('update:visible', false)
}

const handleSave = () => {
  emit('save', formData.value)
  handleClose()
}
</script>

<template>
  <el-dialog
    :title="title"
    :model-value="visible"
    @update:model-value="$emit('update:visible', $event)"
    width="500px"
  >
    <el-form :model="formData" label-width="100px">
      <el-form-item :label="t('products.form.name')">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item :label="t('products.form.price')">
        <el-input-number v-model="formData.price" :precision="2" :step="0.1" />
      </el-form-item>
      <el-form-item :label="t('products.form.description')">
        <el-input v-model="formData.description" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ t('common.cancel') }}</el-button>
        <el-button type="primary" @click="handleSave">{{ t('common.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>