import React, { createContext, useEffect, useRef, useState } from "react";
import Input from "../Input";
import { OptionProps } from "./Option";
import classnames from "classnames";
import Transition from "../Transition";
import Icon from "../Icon";
import useClickOutside from "../../hooks/useClickOutside";

interface SelectProps {
  /**指定默认选中的条目	 可以是是字符串或者字符串数组*/
  defaultValue?: string | string[];
  /** 选择框默认文字*/
  placeholder?: string;
  /** 是否禁用*/
  disabled?: boolean;
  /** 是否支持多选*/
  multiple?: boolean;
  /** select input 的 name 属性	 */
  name?: string;
  /**选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
}

export interface SelectContext {
  onSelect?: (value: string, isSelected: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}

export const SelectContext = createContext<SelectContext>({
  selectedValues: [],
});

const Select: React.FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    disabled,
    multiple,
    name,
    onChange,
    children,
  } = props;

  const input = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedValues, setSelectValues] = useState<string[]>(
    Array.isArray(defaultValue) && multiple
      ? defaultValue
      : typeof defaultValue === "string"
      ? [defaultValue]
      : []
  );

  const [value, setValue] = useState(
    typeof defaultValue === "string" ? defaultValue : ""
  );

  const containerClass = classnames("select", {
    disabled: disabled,
    multiple: multiple,
  });

  const handleOptionClick = (value: string, isSelected: boolean) => {
    let updateValues = [value];
    if (!multiple) {
      setMenuOpen(false);
      setValue(value);
      setSelectValues([value]);
    } else {
      setValue("");
      updateValues = isSelected
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectValues(updateValues);
    }
    onChange && onChange(value, updateValues);
  };
  useEffect(() => {
    // focus input
    if (input.current) {
      input.current.focus();
      if (multiple && selectedValues.length > 0) {
        input.current.placeholder = "";
      } else {
        if (placeholder) input.current.placeholder = placeholder;
      }
    }
  }, [selectedValues, multiple, placeholder]);

  useClickOutside(containerRef, () => {
    setMenuOpen(false);
  });

  const passContext: SelectContext = {
    selectedValues: selectedValues,
    onSelect: handleOptionClick,
    multiple,
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      setMenuOpen(!menuOpen);
    }
  };

  const renderOption = () => {
    return React.Children.map(children, (child, i) => {
      const ele = child as React.FunctionComponentElement<OptionProps>;
      if (ele.type.displayName === "Option") {
        return React.cloneElement(ele, {
          index: `select-${i}`,
        });
      } else {
        console.error(
          "Warning: Select has a child which is not a Option component"
        );
      }
    });
  };

  return (
    <div className={containerClass} ref={containerRef}>
      {!multiple && (
        <div className="select-input" onClick={handleClick}>
          <Input
            ref={input}
            placeholder={placeholder}
            readOnly
            icon="angle-down"
            disabled={disabled}
            name={name}
            value={value}
          />
        </div>
      )}
      {multiple && (
        <div
          onClick={handleClick}
          className={classnames("selected-tags", {
            "selected-tags-disabled": disabled,
          })}
        >
          {selectedValues.length === 0 ? (
            <span className="placeholder">{placeholder}</span>
          ) : (
            ""
          )}
          {selectedValues.map((value, index) => {
            return (
              <span
                className={classnames("tag", {
                  "tag-disabled": disabled,
                })}
                key={`tag-${index}`}
              >
                {value}
                <Icon
                  icon="times"
                  onClick={() => {
                    handleOptionClick(value, true);
                  }}
                />
              </span>
            );
          })}
        </div>
      )}
      <SelectContext.Provider value={passContext}>
        <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
          <ul className="select-dropdown">{renderOption()}</ul>
        </Transition>
      </SelectContext.Provider>
    </div>
  );
};

Select.defaultProps = {
  name: "select",
  disabled: false,
  placeholder: "请选择",
};
export default Select;
