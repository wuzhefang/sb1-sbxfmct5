import { ref, computed } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import type { Product, ProductFormData } from '../types/product'

export function useProducts(isHotProducts = false) {
  const { t } = useI18n()
  const products = ref<Product[]>([])
  const dialogVisible = ref(false)
  const currentProduct = ref<Product | undefined>()
  const dialogTitle = computed(() => 
    currentProduct.value
      ? isHotProducts ? t('products.editHot') : t('products.edit')
      : isHotProducts ? t('products.addHot') : t('products.add')
  )

  // Initialize with sample data
  const initializeProducts = () => {
    products.value = isHotProducts
      ? [
          { id: 1, name: t('products.sampleHot1.name'), price: 299.99, description: t('products.sampleHot1.description'), isHot: true },
          { id: 2, name: t('products.sampleHot2.name'), price: 399.99, description: t('products.sampleHot2.description'), isHot: true }
        ]
      : [
          { id: 1, name: t('products.sample1.name'), price: 99.99, description: t('products.sample1.description') },
          { id: 2, name: t('products.sample2.name'), price: 199.99, description: t('products.sample2.description') }
        ]
  }

  const handleAdd = () => {
    currentProduct.value = undefined
    dialogVisible.value = true
  }

  const handleEdit = (row: Product) => {
    currentProduct.value = row
    dialogVisible.value = true
  }

  const handleDelete = (row: Product) => {
    ElMessageBox.confirm(
      isHotProducts ? t('products.deleteHotConfirm') : t('products.deleteConfirm'),
      t('common.tip'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }
    ).then(() => {
      products.value = products.value.filter(item => item.id !== row.id)
      ElMessage.success(t('products.messages.deleteSuccess'))
    })
  }

  const handleSave = (data: ProductFormData) => {
    const productData = isHotProducts ? { ...data, isHot: true } : data
    
    if (currentProduct.value) {
      const index = products.value.findIndex(p => p.id === currentProduct.value!.id)
      products.value[index] = { ...currentProduct.value, ...productData }
      ElMessage.success(t('products.messages.editSuccess'))
    } else {
      const newProduct: Product = {
        id: Math.max(...products.value.map(p => p.id), 0) + 1,
        ...productData
      }
      products.value.push(newProduct)
      ElMessage.success(t('products.messages.addSuccess'))
    }
    dialogVisible.value = false
  }

  // Initialize products
  initializeProducts()

  return {
    products,
    dialogVisible,
    currentProduct,
    dialogTitle,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave
  }
}