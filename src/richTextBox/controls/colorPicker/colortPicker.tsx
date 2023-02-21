import ColorPickerLayout from "./colorPickerLayout";

// later will be provided from props;
import config from "../../config/defaultToolbar";

import {
  toggleCustomInlineStyle,
  getSelectionCustomInlineStyle,
} from "draftjs-utils";

const ColorPicker = (props: any) => {
  const { editorState, onChange } = props;
  const currentColor = getSelectionCustomInlineStyle(editorState, [
    "COLOR",
  ]).COLOR;
  const currentBgColor = getSelectionCustomInlineStyle(editorState, [
    "BGCOLOR",
  ]).BGCOLOR;

  const color = currentColor && currentColor.substring(6);
  const bgColor = currentBgColor && currentBgColor.substring(8);

  const toggleColor = (style: any, color: any) => {
    console.log("calling togglecolor..");
    const newState = toggleCustomInlineStyle(editorState, style, color);
    if (newState) {
      console.log("Updating state...");
      onChange(newState);
    }
  };

  return (
    <ColorPickerLayout
      config={config.colorPicker}
      onChange={toggleColor}
      currentState={{ color, bgColor }}
    />
  );
};

export default ColorPicker;
