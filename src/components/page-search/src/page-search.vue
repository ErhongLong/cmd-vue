<template>
  <div>
    <hy-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="btns">
          <el-button size="medium" icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" size="medium" icon="el-icon-search" @click="handleQueryClick"
            >查询</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import HyForm, { IForm } from '@/base-ui/form'

interface IFormData {
  [key: string]: any
}

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    title: {
      type: String,
      default: '高级检索'
    }
  },
  emits: ['queryBtnClick', 'resetBtnClick'],

  // 双向绑定的属性应该室友配置文件的field来决定
  // 通过props.searchConfig.formItems传过来的指动态的决定hyForm组件中的input类型和数目
  setup(props, { emit }) {
    const originFormData: IFormData = {}
    const formItems = props.searchConfig.formItems ?? []
    for (const formItem of formItems) {
      originFormData[`${formItem.field}`] = ''
    }
    const formData = ref<IFormData>({ ...originFormData })

    // 重置按钮的点击
    const handleResetClick = () => {
      for (const key in originFormData) {
        formData.value[`${key}`] = originFormData[key]
      }
      emit('resetBtnClick')
    }
    // 查询按钮的点击
    const handleQueryClick = () => {
      console.log({ ...formData.value })
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.title {
  padding-left: 30px;
  text-align: left;
}

.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
