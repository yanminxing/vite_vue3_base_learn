# 1 使用vite创建vue3项目

## 1 介绍与基本配置

1 [链接地址](https://blog.csdn.net/weixin_44576057/article/details/123704709?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123704709-blog-121894233.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123704709-blog-121894233.pc_relevant_recovery_v2&utm_relevant_index=3)

2 创建vite+vue3+ts项目

```js
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

