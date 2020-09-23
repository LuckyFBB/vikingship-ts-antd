import React from "react";

export interface TabItemProps {
  /** */
  label: string | React.ReactElement;
  disabled?: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export default TabItem;
