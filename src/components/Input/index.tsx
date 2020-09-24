import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import Icon from "../Icon";

type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**inputc尺寸 */
  size?: InputSize;
  /**是否禁用 */
  disabled?: boolean;
  /**图标类型 */
  icon?: IconProp;
  /**后缀内容 */
  append?: React.ReactElement | string;
  /**前缀内容 */
  prepend?: React.ReactElement | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { size, disabled, icon, append, prepend, style, ...restProps } = props;
  const classes = classnames("input-wrapper", {
    [`input-size-${size}`]: size,
    disabled: disabled,
    "input-group": prepend || append,
    "has-append": !!append,
    "has-prepend": !!prepend,
  });

  const renderIcon = () =>
    icon && (
      <div className="icon-wrapper">
        <Icon icon={icon} title={`title-${icon}`} />
      </div>
    );
  
  return (
    <div className={classes} style={style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {renderIcon()}
      <input className="input-inner" {...restProps} disabled={disabled} />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};

Input.defaultProps = {
  size: "md",
  disabled: false,
};

export default Input;
