import React from "react";
import { useState } from "react";
import { EditorState, convertToRaw, Editor, RichUtils } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./textbox.css";
import Toolbar from "./toolbar/toolbar";
import {
  changeDepth,
  handleNewLine,
  blockRenderMap,
  getCustomStyleMap,
  extractInlineStyle,
  getSelectedBlocksType,
} from "draftjs-utils";

const DefaultBox = () => {
  // const textEditorWrapperRef = React.useRef(null);
  const editorRef: any = React.useRef(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const updateEditorState = (editorState: any) => setEditorState(editorState);

  // Draft handle values
  const HANDLED = "handled";
  const NOT_HANDLED = "not-handled";

  const _handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      updateEditorState(newState);
      return HANDLED;
    }
    return NOT_HANDLED;
  };

  // const onEditorStateChange = (editorState: any) => {
  //   setEditorState(editorState);
  // };

  const setFocus = () => {
    // editorRef.focus();
  };

  const getStyleMap = () => {
    return { ...getCustomStyleMap() }; // add other cutom style maps here if needed
  };

  return (
    <div>
      <h1>Default draft js text box</h1>
      <div className="rich-text-box" onClick={setFocus}>
        <Editor
          spellCheck={true}
          readOnly={false}
          stripPastedStyles={true}
          editorState={editorState}
          handleKeyCommand={_handleKeyCommand}
          // customStyleFn={customStyleFn}
          customStyleMap={getStyleMap()}
          onFocus={setFocus}
          // onFocus={() => {
          //   setIsTextEditorFocused(true);
          //   setIsFirstTimeClicked(true);
          // }}
          onChange={updateEditorState}
          // handleReturn={_handleReturn}
          // handlePastedText={_handlePastedText}
          // handleBeforeInput={_handleBeforeInput}
          ref={editorRef}
        />
      </div>
      <Toolbar
        editorState={editorState}
        updateEditorState={updateEditorState}
      ></Toolbar>
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default DefaultBox;
