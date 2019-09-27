# MiniUI

一套用于公司内部的小程序的组件库

## 文档

[中文文档](https://github.com/5kinna/MiniUI/blob/master/docs-zh.md)

## 体验

内置了所有组件的示例，可按以下方式在微信开发者工具中查看

```bash
npm run dev
```

然后，将example目录用微信开发者工具打开即可。

## 快速上手

### 使用之前

在开始使用之前，需要先阅读[微信开发者文档-自定义组件相关知识](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

### 如何使用

将dist目录下需要使用到的组件copy到项目中。然后按照以下方式使用组件，以input为例：

**1.** 在页面的 json 中配置（路径根据自己项目位置配置）：

```json
"usingComponents": {
    "d-input": "../../dist/input/index"
}
```

**2** 在 wxml 中使用组件：

```html
<d-input name="mobile" type="text" placeholder="请输入手机号码" value=""/>   
```

### 如何开发

将项目clone到本地，然后按照以下步骤开发：
**1.** 开启热更新：

```bash
npm run dev
```

**2** 在src下编辑组件相关代码

**3** 在example/pages下编辑页面代码，即可在微信开发者工具中查看对应的样式

**4** 开发完成并测试通过后，运行以下命令打包组件：

```bash
npm run build
```