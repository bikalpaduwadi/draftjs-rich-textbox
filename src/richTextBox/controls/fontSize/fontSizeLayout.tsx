import { useState } from "react";
import Option from "../../components/option";
import "./font-size.css";

const FontSizeLayout = (props: any) => {
  const { config, currentFontSize } = props;
  const fontOptions = config.options;
  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);

  const onChange = (fontSize: number) => {
    props.onChange(fontSize);
    setShowFontSizeMenu(false);
  };

  const renderModal = () => (
    <div
      className="rte-fontsize-modal"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {fontOptions.map((fontSize: number, index: number) => (
        <Option
          value={fontSize}
          key={index}
          className="rte-fontsize-option"
          activeClassName="rte-fontsize-option-active"
          active={currentFontSize === fontSize}
          onClick={onChange}
        >
          <span>{fontSize}</span>
        </Option>
      ))}
    </div>
  );

  return (
    <div className="rte-fontsize-wrapper">
      <Option onClick={() => setShowFontSizeMenu((val) => !val)}>
        {/* <img src={icon} alt="" /> */}
        <span>SIZE</span>
      </Option>
      {showFontSizeMenu ? renderModal() : undefined}
    </div>
  );
};

export default FontSizeLayout;
