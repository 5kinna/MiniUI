# MiniUI 组件库文档

## 基础组件

### Image图片

#### 概述

基础组件，同时封装了图片加载异常以及loading等状态

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-image": "../../dist/image/index"
}
```

#### 示例

```html
<!-- 没有图片源 -->
<d-image width="100" height="100"></d-image>

<!-- 图片加载失败 -->
<d-image width="100" height="100" src="赋值一个不存在的资源地址"></d-image>

<!-- 图片加载正常 -->
<d-image width="100" height="100" src="赋值一个存在的资源地址"></d-image>

<!-- 头像加载 -->
<d-image width="100" height="100" mode="scaleToFill" src="赋值一个存在的资源地址" type="avator"></d-image>

```

#### API

##### properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  src | 图片资源地址 | String | '' |
|  mode | 图片裁剪、缩放的模式 | String | 'aspectFit' |
|  lazyLoad | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 | Boolean | false |
|  width | 图片宽度（单位 px） | any | 300 |
|  height | 图片高度（单位 px） | any | 225 |
|  empty | 没有图片资源提示文案 | String | '暂无图片' |
|  loading | 是否正在加载图片资源 | Boolean | true |
|  error | 图片资源异常提示文案 | String | '图片异常 |
|  type | 图片类型（avator：头像；normal：一般图片） | String | 'normal' |

#### slots

|  name   |   说明  |
| --- | --- |
|  empty | 没有图片资源提示内容 |
|  loading | 图片资源加载中提示内容 |
|  error | 图片资源加载异常提示内容 |
|  空（即默认） | 图片底部内容 |

#### events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  load | 图片资源加载完成时的回调 | { status(组件状态), ...(其他参数) } |
|  error | 图片资源加载异常时的回调 | { status(组件状态), ...(其他参数) } |
|  click | 点击图片的回调 | { status(组件状态), ...(其他参数) } |
|  change | 图片资源加载状态变更时的回调 | { status(组件状态) } |

### Icon图标

#### 概述

基础组件，封装常用小图标

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-icon": "../../dist/icon/index"
}
```

#### 示例

```html
<d-icon type="top" color="#7B8087"></d-icon>

<d-icon type="down" color="#7B8087"></d-icon>

<d-icon type="right" color="#7B8087"></d-icon>

<d-icon type="left-full" color="#7B8087"></d-icon>

<d-icon type="right-full" color="#7B8087"></d-icon>

<d-icon type="delete" color="#7B8087"></d-icon>

```

#### API

##### properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  type | 字体图标名称 | String | '__empty__' |
|  size | 字体图标大小(单位 rpx) | [String, Number] | 40 |
|  color | 字体图标颜色 | String | '#c7c7cc' |

## 表单组件

### Input输入框

### Radio单选

### CheckBox多选

### Picker选择

## 导航组件

### TabBar标签栏

### Tabs标签页

### NoticeBar通告栏

### Index索引选择器

## 反馈组件

### Model对话框

### Loading加载中

### Swiper滑动菜单

## 视图组件

### Badge徽章

### Tag标签

### Collapse折叠面板