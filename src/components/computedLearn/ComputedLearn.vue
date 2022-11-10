/*
* computed
*  */
<template>
	<div class="container">count的值{{ count }}</div>
	<div class="container">computed的值{{ computedValue }}</div>
</template>

<script setup lang="ts" name="ComputedLearn">

import {computed, ref} from 'vue';

const count = ref(1);
let computedValue = computed(()=> {
	return count.value + 1;
})

// 1 若computed参数只有get的回调，则computed的值是一个readonly，即只读的值，不能通过赋值的方式修改其值。
// computedValue.value = 32;

// 2 computed的值还可以是一个对象，该对象里面有set和get函数，分别为赋值和取值时候触发
// 这个时候，computed的值定义之后，还可以对其赋值
const computedTwo = computed({
	// 需要设置set函数，才能对computed的值进行修改
	set (value: number){
		// return value + 3;
	},
	get(){
		return count.value + 2;
	}
})
console.log(computedTwo.value);
computedTwo.value = 3;
console.log(computedTwo.value);

</script>

<style lang="scss" scoped></style>