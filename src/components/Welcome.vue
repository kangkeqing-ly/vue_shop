<!--
 * @Author: your name
 * @Date: 2021-01-29 15:53:40
 * @LastEditTime: 2021-01-31 16:50:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\Welcome.vue
-->
<template>
  <div>
    <h1>你好 卿九哥</h1>
  </div>
</template>

<script>
import hub from '../components/utils/hub'
export default {
  name: '',

  data() {
    return {}
  },

  methods: {},
  created() {
    hub.$emit('saveNavState', '')
  }
}
</script>

<style lang="less" scoped></style>
