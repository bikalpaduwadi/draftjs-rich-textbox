import ToolbarIcons from './toolbarIcons';
import { RichUtils } from 'draft-js';
import ToolbarItem from './toolbarItem';
import './toolbar.css';
// import FontSize from "./options/fontSize";
import ColorPicker from '../controls/colorPicker/colortPicker';
import FontSize from '../controls/fontSize/fontSize';

const Toolbar = (props: any) => {
  const { editorState, updateEditorState } = props;

  const applyStyle = (style: any) => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style: any) => {
    const draftStyle = editorState.getCurrentInlineStyle();
    return draftStyle.has(style);
  };
  return (
    <div className='rich-text-box-toolbar'>
      {ToolbarIcons.map((item, i) => (
        <ToolbarItem
          key={`${item.label}-${i}`}
          applyStyle={() => applyStyle(item.style)}
          isActive={isActive(item.style)}
        >
          {item.label}
        </ToolbarItem>
      ))}

      {/* <FontSize
        editorState={editorState}
        updateEditorState={updateEditorState}
        styles={styles}
      ></FontSize> */}

      <FontSize
        editorState={editorState}
        onChange={updateEditorState}
      ></FontSize>

      <ColorPicker
        editorState={editorState}
        onChange={updateEditorState}
      ></ColorPicker>
    </div>
  );
};

export default Toolbar;
