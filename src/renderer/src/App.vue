<!--
 * @Date: 2023-09-30 15:22:31
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 10:33:34
-->
<script setup lang="ts">
import SvgIcon from './components/SvgIcon.vue'
const load = async () => {
  const res = await window.preloadAPI.loadConfig()
  console.log(res)
}
</script>
<template>
  <button @click="load">加载设置</button>
  <SvgIcon name="half"></SvgIcon>
  <div bg-red>{{ $t('hello') }}</div>
</template>
