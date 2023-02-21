// later will be provided from props;
import config from "../../config/defaultToolbar";
import {
  toggleCustomInlineStyle,
  getSelectionCustomInlineStyle,
} from "draftjs-utils";
import FontSizeLayout from "./fontSizeLayout";

const FontSize = (props: any) => {
  const { editorState, onChange } = props;
  const currentFontSize = editorState
    ? getSelectionCustomInlineStyle(editorState, ["FONTSIZE"]).FONTSIZE
    : undefined;

  const toggleFontSize = (fontSize: number) => {
    const newState = toggleCustomInlineStyle(editorState, "fontSize", fontSize);
    if (newState) {
      onChange(newState);
    }
  };

  return (
    <FontSizeLayout
      config={config.fontSize}
      onChange={toggleFontSize}
      currentFontSize={currentFontSize}
    />
  );
};

export default FontSize;
