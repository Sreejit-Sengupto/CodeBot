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
    height: "60%",
    fontFamily: "Rubik",
    margin: "auto",
    marginTop: "4rem",
    fontSize: "16px",
  };

  return (
    <>
      <button
        onClick={() => {
          props.setDisplayText("");
          props.setLanguage("");
          props.setBotReply("");
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

      {/* <div className="w-[80%] mx-auto h-[60%] rounded-xl bg-[#FF5E5E33] text-white p-12 font-Rubik header">
        {code}
      </div> */}
    </>
  );
};

export default MyCodeEditor;
