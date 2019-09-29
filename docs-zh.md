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

##### Image properties

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

#### Image slots

|  name   |   说明  |
| --- | --- |
|  empty | 没有图片资源提示内容 |
|  loading | 图片资源加载中提示内容 |
|  error | 图片资源加载异常提示内容 |
|  空（即默认） | 图片底部内容 |

#### Image events

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

##### Icon properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  type | 字体图标名称 | String | '__empty__' |
|  size | 字体图标大小(单位 rpx) | [String, Number] | 40 |
|  color | 字体图标颜色 | String | '#c7c7cc' |

## 表单组件

### Input输入框

### Radio单选

### Picker选择

## 导航组件

### TabBar标签栏

### Tabs标签页

### NoticeBar通告栏

### Index索引选择器

### List列表页

#### 概述

导航组件，用于列表基础布局

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-cell": "../../dist/cell/index",
    "d-cell-item": "../../dist/cell-item/index"
}
```

#### 示例

```html
<d-cell title="导航组件">
  <d-cell-item title="TabBar标签栏" isLink url="../tabbar/index"></d-cell-item>
  <d-cell-item title="Tabs标签页" isLink url="../tabs/index"></d-cell-item>
  <d-cell-item title="NoticeBar通告栏" isLink url="../noticebar/index"></d-cell-item>
  <d-cell-item title="Index索引选择器" isLink url="../indexselect/index"></d-cell-item>
</d-cell>

```

#### API

##### Cell properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  title | 列表某部分标题 | String | '' |

##### Cell-item properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  title | 左侧主要显示文案 | String | ' ' |
|  label | 左侧标题下面说明文案 | String | ' ' |
|  tip | 右侧说明文案 | String | ' ' |
|  isLink | 是否显示右侧箭头 | Boolean | true |
|  isLine | 是否显示底部边框线 | Boolean | false |
|  linkType | 跳转方式 | String | navigateTo |
|  url | 连接地址 | String | ' ' |
|  onlyTapFooter | 是否只在点击右侧部分的时候跳转 | Boolean | false |

#### Cell slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 列表子项整体内容 |

#### Cell-item slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 左侧主体内容 |
|  icon | 左侧标题前面图标内容 |
|  footer | 右侧内容 |

#### Cell-item events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  click | 点击跳转之前的操作 | 无 |

## 反馈组件

### Model对话框

### Loading加载中

### Swiper滑动菜单

## 视图组件

### Badge徽章

#### 概述

视图组件，标识节点状态或数字

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-badge": "../../dist/badge/index"
}
```

#### 示例

```html
<!-- 显示点 -->
<d-badge dot></d-badge>

<!-- 显示数字 -->
<d-badge count="5"></d-badge>

<!-- 显示阈值数字 -->
<d-badge></d-badge>

<!-- 不可编辑 -->
<d-badge disable></d-badge>

```

#### API

##### Badge properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  count | 右上角显示数字 | Number | 199 |
|  over | 右上角显示数字的阈值 | Number | 99 |
|  dot | 右上角是否显示点 | Boolean | false |
|  disable | 右上角状态标识是否不可见 | Boolean | false |

#### Badge slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 需要标识状态的节点 |

### Tag标签

#### 概述

视图组件，用于标记和选择

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-tag": "../../dist/tag/index"
}
```

#### 示例

```html
<!-- 基本使用 -->
<d-tag>标签</d-tag>

<!-- 颜色 -->
<d-tag color="255,199,52">颜色</d-tag>

<!-- 可删除 -->
<d-tag closable bind:click="removeTag">可删除</d-tag>

```

#### API

##### Tag properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  color | 图标背景颜色（rgb格式） | String | '72,153,255' |
|  textColor | 图标显示文字颜色（如果不予设置，则默认为背景颜色值） | String | '' |
|  closable | 是否可删除 | Boolean | false |

#### Tag slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 图标文案 |

#### Tag events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  click | 点击图标事件 | 无 |
|  close | 删除图标事件 | 无 |

### Collapse折叠面板

#### 概述

视图组件，展示或隐藏信息

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-collapse": "../../dist/collapse/index",
    "d-collapse-item": "../../dist/collapse-item/index"
}
```

#### 示例

```html
<!-- 非手风琴模式 -->
<d-collapse>
    <d-collapse-item title="一致性">
        <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
        </view>
    </d-collapse-item>
    <d-collapse-item title="一致性一致性一致性一致性一致性一致性一致性一致性一致性">
        <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
        </view>
    </d-collapse-item>
    <d-collapse-item title="一致性">
        <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
        </view>
    </d-collapse-item>
</d-collapse>

<!-- 手风琴模式 -->
<d-collapse accordion="{{true}}">
    <d-collapse-item title="一致性">
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
    <d-collapse-item title="一致性">
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
    <d-collapse-item title="一致性">
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
</d-collapse>

<!-- 不可编辑 -->
<d-collapse>
    <d-collapse-item title="一致性" disabled show>
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
    <d-collapse-item title="一致性">
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
    <d-collapse-item title="一致性">
      <view class="collapse-main">
        <view>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</view>
        <view>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</view>
      </view>
    </d-collapse-item>
</d-collapse>

```

#### API

##### Collapse properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  active | 当前展开的子项 | [String,Number] | ' ' |
|  accordion | 是否是手风琴模式 | Boolean | false |

##### Collapse-item properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  show | 是否展开 | Boolean | false |
|  name | 组件标识 | [String, Number] | ' ' |
|  title | 组件头部显示文案 | String | ' ' |
|  disabled | 组件是否不可变更展开状态 | Boolean | false |

#### Collapse slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 子项整体 |

#### Collapse-item slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 可展开内容 |
|  title | 头部显示内容 |

#### Collapse events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  change | 当前展开子项变更事件 | 无 |

#### Collapse-item events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  click | 变更展开状态事件 | { index(在父组件中的标识) } |

### Sticky吸顶菜单

#### 概述

视图组件，用于将标题栏在滚动时固定到页面顶部

#### 使用指南

在.json文件中引入组件

```json
"usingComponents": {
    "d-sticky": "../../dist/sticky/index",
    "d-sticky-item": "../../dist/sticky-item/index"
}
```

#### 示例

```html
<d-sticky scrollTop="{{scrollTop}}">
  <d-sticky-item title="基础组件">
    <!-- 同类子项内容 -->
  </d-sticky-item>
  <d-sticky-item title="表单组件">
    <!-- 同类子项内容 -->
  </d-sticky-item>
  <d-sticky-item title="导航组件">
    <!-- 同类子项内容 -->
  </d-sticky-item>
  <d-sticky-item title="反馈组件">
    <!-- 同类子项内容 -->
  </d-sticky-item>
  <d-sticky-item title="视图组件">
    <!-- 同类子项内容 -->
  </d-sticky-item>
</d-sticky>

```

#### API

##### Sticky properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  scrollTop | 距离页面顶部距离 | Number | 0 |

##### Sticky-item properties

|  属性   |   说明  |  类型  | 默认值 |
| --- | --- |  --- |  --- |
|  title | 同类标题 | String | ' ' |

#### Sticky slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 多项分类整体内容 |

#### Sticky-item slots

|  name   |   说明  |
| --- | --- |
|  空（即默认） | 分类子项整体内容 |
|  title | 分类标题内容 |

#### Sticky-item events

|  事件名   |   说明  | 回调参数 |
| --- | --- | --- |
|  change | 固定到页面顶部标题变更 | 无 |