<!--
 * @Date: 2023-09-30 17:07:24
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:13:59
 * @Description: 与vite-plugin-svg-icons配合使用
-->
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  prefix?: string
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon'
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
