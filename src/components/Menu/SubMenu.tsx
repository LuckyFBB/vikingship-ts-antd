import React, { useContext, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import Icon from "../Icon";
import Transition from "../Transition";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setMenuOpen] = useState(isOpened);
  const classes = classnames("menu-item submenu-item", className, {
    active: context.index === index,
    opened: menuOpen,
    vertical: context.mode === "vertical",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classnames("submenu", {
      "menu-open": menuOpen,
    });
    const childComponent = React.Children.map(children, (child, i) => {
      const childrenEle = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childrenEle.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childrenEle, { index: `${index}-${i}` });
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem");
      }
    });
    return (
      <Transition
        in={menuOpen}
        classNames="zoom-in-top"
        timeout={300}
        unmountOnExit
      >
        <ul className={subMenuClasses}>{childComponent}</ul>
      </Transition>
    );
  };

  return (
    <li className={classes} key={index} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" size="sm" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
