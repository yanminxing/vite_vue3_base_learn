<!--vue3中响应式数据学习-->
<template>
  <div>{{ num }}</div>
  <button @click="add" class="button-con">修改num的值</button>
  <div>{{  `下面显示ref定义对象:${obj.count}    ${obj.name}` }}</div>
  <div>
	  <button @click="editObj" class="button-con">修改</button>
	  {{  `下面显示ref定义对象，将其通过toRefs解构出来:${count}    ${name}` }}
  </div>
  <div>{{  `下面显示reactive定义对象:${reactiveObj.age}    ${reactiveObj.no}` }}</div>
  <div>{{  `下面显示reactive定义解构出来的属性:${age}    ${no}` }}</div>
</template>
<script setup lang="ts">
	import {ref, reactive, toRef, toRefs} from 'vue';

  // 使用ref定义原始数据类型
  const num = ref(1);
  const add = function () {
		// 在js里面ref定义的属性，需要通过.value属性来访问
    num.value++
  }
  // 使用ref定义对象类型
  const obj = ref({
    count: 1,
    name: 'Joke',
  })
	// 可以将reactive定义的对象的属性解构出来，解构出来的值仍然是响应式的。
	const { count, name } = toRefs(obj.value);
	const editObj = function () {
		obj.value.count++;
		obj.value.name += '-';
	}

  // 使用reactive定义对象类型
	const reactiveObj = reactive({
		age: 2,
		no: '11',
	})
	// 可以将reactive定义的对象的属性解构出来，解构出来的值仍然是响应式的。
  const { age, no } = toRefs(reactiveObj);
</script>
<style lang="scss" scoped>
	.button-con {
		color: red;
	}
</style>