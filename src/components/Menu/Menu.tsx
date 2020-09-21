import React, { createContext, useState } from "react";
import classnames from "classnames";
import { MenuItemProps } from "./MenuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: string) => void;

interface MenuProps {
  defaultIndex?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  className?: string;
  children: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

interface IMuneContext {
  index: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMuneContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    children,
    mode,
    defaultIndex,
    style,
    defaultOpenSubMenus,
    onSelect,
  } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const classes = classnames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const handleClick: SelectCallback = (index: string) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMuneContext = {
    index: activeIndex ? activeIndex : "0",
    mode,
    defaultOpenSubMenus,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (children, index) => {
      const childrenEle = children as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childrenEle.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childrenEle, { index: index.toString() });
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem");
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
