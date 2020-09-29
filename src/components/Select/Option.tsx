import React, { useContext } from "react";
import classnames from "classnames";
import { SelectContext } from ".";
import Icon from "../Icon";

export interface OptionProps {
  index?: string;
  /** 默认根据此属性值进行筛选，该值不能相同*/
  value: string;
  /** 选项的标签，若不设置则默认与 value 相同*/
  label?: string;
  /** 是否禁用该选项*/
  disabled?: boolean;
}

const Option: React.FC<OptionProps> = (props) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext);
  const { index, value, label, disabled, children } = props;
  const isSelected = selectedValues.includes(value);
  const classes = classnames("select-item", {
    disabled: disabled,
    selected: isSelected,
  });

  const handleClick = (
    e: React.MouseEvent,
    value: string,
    isSelected: boolean
  ) => {
    e.preventDefault();
    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };

  return (
    <li
      className={classes}
      key={index}
      onClick={(e) => {
        handleClick(e, value, isSelected);
      }}
    >
      {children || label ? label : value}
      {multiple && isSelected && <Icon icon="check" />}
    </li>
  );
};

Option.displayName = "Option";

export default Option;
