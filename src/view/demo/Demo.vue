<template>
  <div class="content">
    11111
    <span>222</span>
  </div>
  <!-- 这里是 &:last-child所表示的元素-->
  <div class="content">
    11111
    <span>333</span>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .content {
    color: red;
    // &取得父元素，即content。&:last-child为类为content中的一组兄弟元素中的最后元素
    &:last-child {
      color: yellow;
    }
  }
</style>
