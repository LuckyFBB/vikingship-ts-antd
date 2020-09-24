import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import Input, { InputProps } from "../Input";
import Icon from "../Icon";
import useDebounce from "../../hooks/useDedounce";
import useClickOutside from "../../hooks/useClickOutside";
import Transition from "../Transition";

interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    keyword: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: string) => void;
  renderOption?: (item: DataSourceType) => React.ReactElement;
}

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value,
    ...restProps
  } = props;
  const [inputValue, setValue] = useState(value as string);
  const [suggestion, setSuggestion] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighLightIndex] = useState(-1);
  const [showDropDown, setShowDropDown] = useState(false);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debounceValue = useDebounce(inputValue, 500);

  useClickOutside(componentRef, () => {
    setShowDropDown(false);
  });

  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setSuggestion([]);
      const res = fetchSuggestions(debounceValue);
      if (res instanceof Promise) {
        setLoading(true);
        res.then((data) => {
          setLoading(false);
          setSuggestion(data);
          setShowDropDown(!!data.length);
        });
      } else {
        setSuggestion(res);
        setShowDropDown(!!res.length);
      }
    } else {
      setShowDropDown(false);
    }
    setHighLightIndex(-1);
  }, [debounceValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setValue(value);
    triggerSearch.current = true;
  };

  const highlight = (index: number) => {
    if (index <= 0) index = 0;
    if (index >= suggestion.length) index = suggestion.length - 1;
    setHighLightIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        suggestion[highlightIndex] && handleSelect(suggestion[highlightIndex]);
        break;
      case "ArrowUp":
        highlight(highlightIndex - 1);
        break;
      case "ArrowDown":
        highlight(highlightIndex + 1);
        break;
      case "Escape":
        setShowDropDown(false);
        break;
      default:
        break;
    }
  };

  const handleSelect = (item: DataSourceType) => {
    setValue(item.value);
    setShowDropDown(false);
    onSelect && onSelect(item.value);
    triggerSearch.current = false;
  };

  const renderTemplete = (item: DataSourceType) =>
    renderOption ? renderOption(item) : item.value;

  const renderDropdown = () => {
    return (
      <Transition
        in={showDropDown || loading}
        classNames="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestion([]);
        }}
      >
        <ul className="suggestion-list">
          {loading && (
            <div className="suggstion-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestion.map((item, index) => {
            const classes = classnames("suggestion-item", {
              active: index === highlightIndex,
            });
            return (
              <li
                className={classes}
                key={index}
                onClick={() => handleSelect(item)}
              >
                {renderTemplete(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };

  return (
    <div className="auto-complete" ref={componentRef}>
      <Input
        {...restProps}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {renderDropdown()}
    </div>
  );
};

export default AutoComplete;
