import { useEffect } from "react";
import "./toolbarItem.css";

const ToolbarItem = (props: any) => {
  const { children, applyStyle, isActive } = props;
  return (
    <>
      <div
        className={`toolbar-item ${isActive ? "selected" : ""}`}
        onClick={applyStyle}
      >
        {children}
      </div>
    </>
  );
};

export default ToolbarItem;
