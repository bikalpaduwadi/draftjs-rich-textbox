import { useState } from "react";
import { COLOR_STYLES } from "../../constants";
import classNames from "classnames";
import Option from "../../components/option";
import "./color-picker.css";

const TEXT_COLOR_HEADING = "TEXT";
const BG_COLOR_HEADING = "HIGHLIGHT";

const ColorPickerLayout = (props: any) => {
  const [currentStyle, setCurrentStyle] = useState(COLOR_STYLES.COLOR);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const {
    config,
    currentState: { color, bgColor },
  } = props;

  const colors = config.options;
  const currentSelectedColor =
    currentStyle === COLOR_STYLES.COLOR ? color : bgColor;

  const onChange = (updatedColor: any) => {
    props.onChange(currentStyle, updatedColor);
    setShowColorPicker(false);
  };

  const renderModal = () => (
    <div
      className={classNames("rte-colorpicker-modal")}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span className="rte-colorpicker-modal-header">
        <span
          className={classNames("rte-colorpicker-modal-style-label", {
            "rte-colorpicker-modal-style-label-active":
              currentStyle === "color",
          })}
          onClick={() => setCurrentStyle(COLOR_STYLES.COLOR)}
        >
          {TEXT_COLOR_HEADING}
        </span>
        <span
          className={classNames("rte-colorpicker-modal-style-label", {
            "rte-colorpicker-modal-style-label-active":
              currentStyle === "bgcolor",
          })}
          onClick={() => setCurrentStyle(COLOR_STYLES.BGCOLOR)}
        >
          {BG_COLOR_HEADING}
        </span>
      </span>
      <span className="rte-colorpicker-modal-options">
        {colors.map((c: any, index: number) => (
          <Option
            value={c}
            key={index}
            className="rte-colorpicker-option"
            activeClassName="rte-colorpicker-option-active"
            active={currentSelectedColor === c}
            onClick={onChange}
          >
            <span
              style={{ backgroundColor: c }}
              className="rte-colorpicker-cube"
            />
          </Option>
        ))}
      </span>
    </div>
  );

  return (
    <div
      className="rte-colorpicker-wrapper"
      aria-haspopup="true"
      aria-expanded={showColorPicker}
      aria-label="rte-color-picker"
      title="Color Picker"
    >
      <Option onClick={() => setShowColorPicker((val) => !val)}>
        {/* <img src={icon} alt="" /> */}
        <span>COLOR</span>
      </Option>
      {showColorPicker ? renderModal() : undefined}
    </div>
  );
};

export default ColorPickerLayout;
