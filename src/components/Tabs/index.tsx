import React, { useState } from "react";
import classnames from "classnames";
import { TabItemProps } from "./TabItem";

type SelectCallback = (index: number) => void;
type TabsType = "line" | "card";
type TabsMode = "horizontal" | "vertical";

interface TabsProps {
  /** tabs类型 */
  type?: TabsType;
  /** tabs方向 */
  mode?: TabsMode;
  className?: string;
  /** 当前激活的index，默认为0 */
  defaultIndex?: number;
  children?: React.ReactNode;
  /**点击 Tab 触发的回调函数 */
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    style,
    className,
    children,
    onSelect,
    type,
    mode,
  } = props;
  const [activeIndex, setIndex] = useState(defaultIndex);

  const tabClasses = classnames("tabs", {
    "tabs-vertical": mode === "vertical" && type !== "card",
  });

  const navClasses = classnames("tabs-nav", className, {
    "nav-line": type === "line",
    "nav-card": type !== "line",
  });

  const handleClick: SelectCallback = (index: number) => {
    setIndex(index);
    onSelect && onSelect(index);
  };

  const renderNavLink = () => {
    return React.Children.map(children, (child, index) => {
      const childEle = child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childEle.props;
      const classes = classnames("tabs-nav-item", className, {
        disabled: disabled,
        active: activeIndex === index,
      });
      return (
        <li className={classes} onClick={() => handleClick(index)}>
          {label}
        </li>
      );
    });
  };

  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={tabClasses}>
      <ul className={navClasses} style={style}>
        {renderNavLink()}
      </ul>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
  mode: "horizontal",
};

export default Tabs;
