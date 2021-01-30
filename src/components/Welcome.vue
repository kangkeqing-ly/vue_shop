<!--
 * @Author: your name
 * @Date: 2021-01-29 15:53:40
 * @LastEditTime: 2021-01-30 10:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\Welcome.vue
-->
<template> </template>

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
