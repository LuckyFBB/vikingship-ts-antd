import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";

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
  const classes = classnames("menu-item submenu-item", className, {
    active: context.index === index,
  });
  const renderChildren = () => {
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
    return <ul className="submenu">{childComponent}</ul>;
  };

  return (
    <li className={classes} key={index}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
