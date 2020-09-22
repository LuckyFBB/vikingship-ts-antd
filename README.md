<!--
 * @Author: FBB
 * @Date: 2020-09-10 21:34:53
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-22 15:59:49
 * @Description:
-->

### vikingship-ts-antd

#### components 组件

##### Button

- 不同的 button type
- 不同的 button size
- disabled 状态

```tsx
<Button
  size="lg"
  type="primary"
  disabled
  href=""?
  className=""?
  autoFocus=""?
  ...
>Button</Button>
```

##### Alert

- 不同的 alert type
- 标题和内容，解释更详细的警告
- 配置关闭按钮

```tsx
<Alert title="" desc=""? alertType=""? cancolse={false}?/>
```

##### Menu

- 横向
  active/disabled/dropMenu
- 纵向
  active/disabled/dropMenu

使用 context 来在组件间传递值
使用 React.Children.map()遍历 props.children
使用 React.cloneElement 克隆样板并返回新的 React 元素(用于添加 index)

##### Tabs

- mode("horizontal" | "vertical")
- type("line" | "card") 注意：card 和 vertical 不能同时存在

#### Icon 的解决方案

1. 雪碧图
2. fonticon
3. svg

基于[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)二次封装

#### 动画的解决方案

1. CSS3 属性
2. React Transition Group

#### styles 样式

##### 样式解决方案

1. Inline CSS
2. CSS in JS
3. styled-component
4. Sass/Less

##### 步骤

1. 色彩体系
2. 字体系统

#### react 测试

使用 React Testing Library
