import React from "react";
import MyCodeEditor from "./MyCodeEditor";
import Language from "./Languages.jsx";

export default function Bot() {
  const [userInput, setUserInput] = React.useState("");
  function handleChange(event) {
    setUserInput(event.target.value);
  }

  const [botReply, setBotReply] = React.useState(""); // State to handle bot's speech bubble.
  const [loader, setLoader] = React.useState(false);
  const [language, setLangugage] = React.useState("");
  const [code, setCode] = React.useState("");

 async function handleClick() {
    if(userInput) {
        setLoader(true)
        setBotReply("Ok, just wait a second while my digital brain digests that...")
        await fetchReply(userInput)
        await fetchAnswer(userInput)
    }
 }

 // Function to generate an enthusiastic message once the question is recieved.
 async function fetchReply(userInput) {
    await fetch(`http://localhost:5000/generate-message?userInput=${userInput}&language=${language}`)
      .then(response => response.json())
      .then(response => setBotReply(response.message.content))
}

// Function to generate the code according to the question.
 async function fetchAnswer(userInput) {
    await fetch(`http://localhost:5000/get-code?userInput=${userInput}&language=${language}`)
      .then(response => response.json())
      .then(response => setCode(response.message.content))
    setLoader(false);
    setUserInput("");
    setBotReply("");
}

  return (
    code ? <MyCodeEditor displayText={code} setDisplayText={setCode} setLanguage={setLangugage} setBotReply={setBotReply}/> : <div className="bg-white w-[95%] lg:w-[40%] mx-auto mt-10 border-none rounded-xl flex flex-col items-center justify-center p-5">
      <div className="flex justify-center items-center">
        <img src="/images/robot.png" alt="" className=" w-60 ml-[-3rem] lg:w-72" />
        <div className="relative lg:w-[17rem] h-72 bg-[#f3de8a] border-none rounded-xl ml-[-35px] flex justify-center items-center speech--bubble">
          <div className="font-Rubik pl-3 w-full">
            {language === "" ? <Language setLanguage={setLangugage} /> :
            botReply === ""
              ? <p>Ask me any programming question and I will give it&apos;s solution in {language}</p>
              : <p>{botReply}</p>}
          </div>
        </div>
      </div>

      {loader ? <img src="/images/loading.svg"/> : <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Print Hello World"
          value={userInput}
          onChange={handleChange}
          className="border-none rounded-lg bg-[#e1e5f2] w-[65%] lg:w-[22rem] p-6 rounded-tr-none rounded-br-none font-Rubik text-[16px] focus:outline-none"
        />
        <button disabled={userInput === ""} className="w-28 p-[1.39rem] border-none rounded-lg bg-[#fe7f2d] rounded-tl-none rounded-bl-none font-Rubik text-xl text-white cursor-pointer hover:bg-[#ff902f] disabled:hover:bg-[#fe7f2d] disabled:cursor-default" onClick={handleClick}>
          Ask
        </button>
      </div>}
    </div>
  );
}
