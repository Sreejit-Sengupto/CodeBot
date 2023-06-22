import { useState } from "react";
import AceEditor from "react-ace";
import { BiArrowBack } from "react-icons/bi";

// Import the necessary language mode and theme files
import "ace-builds/src-noconflict/mode-javascript";
import "brace/mode/c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-cloud9_night";

const MyCodeEditor = (props) => {
  // eslint-disable-next-line react/prop-types
  const [code, setCode] = useState(props.displayText);

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const style = {
    width: "80%",
    height: "60vh",
    fontFamily: "Rubik",
    margin: "auto",
    marginTop: "5rem",
    fontSize: "16px",
  };

  return (
    <>
      <button
        onClick={() => {
          props.setDisplayText("");
        }}
        className="text-3xl font-bold cursor-pointer bg-none border-none text-[#F6F740]"
      >
        <BiArrowBack />
      </button>
      <AceEditor
        mode="c_cpp"
        theme="cloud9_night"
        value={code}
        onChange={handleChange}
        name="code-editor"
        wrapEnabled={true}
        // editorProps={{ $blockScrolling: true }}
        style={style}
      />
    </>
  );
};

export default MyCodeEditor;
