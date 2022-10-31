<!--vue3中响应式数据学习-->
<template>
	<div ref="dom_id">1111</div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue';

// 获取真实的dom元素,需要注意的是，需要将ref里面的参数设置为null
const dom_id = ref(null);
onMounted(() => {
	console.log(dom_id.value);
})
</script>
<style lang="scss" scoped>
.button-con {
	color: red;
}
</style>