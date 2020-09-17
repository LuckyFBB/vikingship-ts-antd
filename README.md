<!--
 * @Author: FBB
 * @Date: 2020-09-10 21:34:53
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-17 21:00:09
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
