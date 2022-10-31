<template>
  <div> {{ `count: ${obj.count}` }}</div>
  <div> {{ `double: ${obj.double}` }}</div>
  <button @click="increase" class="button-con">count加1</button>
</template>

<script lang="ts" setup>
  import {ref, reactive, computed} from 'vue';

  const color = 'red';

  interface TypeObj {
    count: number;
    double: number;
  }

  const obj:TypeObj = reactive({
    count: 1,
    double: computed(() => obj.count * 2)
  });

  function increase() {
    obj.count++;
  }
</script>

<style lang="scss" scoped>
  .button-con {
    color: v-bind(color); // 这里可以使用模板里面定义的变量
  }
</style>