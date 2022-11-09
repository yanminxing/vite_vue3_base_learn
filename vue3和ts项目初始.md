# 1 使用vite创建vue3项目

## 1 介绍与基本配置

1 [链接地址](https://blog.csdn.net/weixin_44576057/article/details/123704709?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123704709-blog-121894233.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123704709-blog-121894233.pc_relevant_recovery_v2&utm_relevant_index=3)

2 创建vite+vue3+ts项目

```javascript、
npm init vite@latest
```

3 项目介绍

1）项目使用vite3+vue3+ts4进行开发

4 更改本地开发的端口，在vite.config.ts里面进行配置

5 配置别名

在vite.config.ts里面的resolve进行配置，需要安装@types/node。

```
npm install @types/node --save-dev
```

6 配置路由

```
npm install vue-router@4
```

然后在router/index.ts里面创建路由，并且在main.ts里面全局引入路由

7 忽略后缀名配置

vite.config.ts配置： 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入

8 配置vuex

```
npm install vuex@next --save
```

在store里面进行配置，然后在main.ts里面引入

9 eslint的配置

```
npm install --save-dev eslint eslint-plugin-vue
```

10 使用sass、scsss

```
npm install sass-loader node-sass --save-dev
npm install sass --save -dev
npm install style-loader  --save-dev
```

## 2 运行項目

```
npm i
npm run dev
// 或者
yarn 
yarn dev
```

# 2 视频2

[项目视频链接](https://www.bilibili.com/video/BV1gf4y1W783?p=2&spm_id_from=pageDriver&vd_source=0a0dd058ef849bffba564af91a70780d)

注意：这里将src/view/home/Home.vue作为路由组件的入口。学习vue3语法的时候，可以将组件引入到这里即可。

## 2.1 创建vite项目

## 2.2 setup语法

## 2.3 简单的demo（p3）

1 注意

注意：这里将src/view/home/Home.vue作为路由组件的入口。学习vue3语法的时候，可以将组件引入到这里即可。

2 代码目录：src/components/demo/index.vue

## 2.4 定义响应式数据

1 注意

注意：这里将src/view/home/Home.vue作为路由组件的入口。学习vue3语法的时候，可以将组件引入到这里即可。

2 代码目录：src/components/reactiveLearn/ReactiveLearn.vue

3 定义响应式数据有两种方法

1）ref

- ref可以定义原始数据类型和对象类型。需要注意的是，若在js中使用ref定义的数据，需要通过.value属性来访问；在模板中则不需要通过.value属性来访问。
- 注意：使用ref定义的对象，里面的属性可以通过toRefs解构出来，而且，解构出来的属性与原来对象里面的属性指向同一个响应式数据。即他们相互关联，解构出来的属性是响应式 的。

2）reactive

- 用来定义对象类型的响应式数据。访问的时候，不需要添加.value属性。
- 注意：使用reactive定义的对象，里面的属性可以通过toRefs解构出来，而且，解构出来的属性与原来对象里面的属性指向同一个响应式数据。即他们相互关联，解构出来的属性是响应式 的



## 2.5 templateRefs（p5）

1 注意

注意：这里将src/view/home/Home.vue作为路由组件的入口。学习vue3语法的时候，可以将组件引入到这里即可。

2 代码目录：src/components/templateRefs/TemplateRefs.vue

3 作用，给ref传递一个null参数，定义的变量，可以直接作为模板里面通过ref绑定元素。

```vue
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
```



## 2.6 computed(p6)

1 若computed参数只有get的回调，则computed的值是一个readonly，即只读的值，不能通过赋值的方式修改其值。

2 computed的值还可以是一个对象，该对象里面有set和get函数，分别为赋值和取值时候触发。这个时候，computed的值定义之后，还可以对其赋值，即其中的值可以修改。



