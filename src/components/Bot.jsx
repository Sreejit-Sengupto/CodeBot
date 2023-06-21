import React from "react";
import { ReactComponent as Logo } from "../../public/images/loading.svg";
import MyCodeEditor from "./MyCodeEditor";

export default function Bot() {
  const [userInput, setUserInput] = React.useState("");
  function handleChange(event) {
    setUserInput(event.target.value);
  }

  const [botReply, setBotReply] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [code, setCode] = React.useState("");


 const url = 'https://cheerful-nougat-4ccb49.netlify.app/.netlify/functions/fetchAI'

 function handleClick() {
    if(userInput) {
        setLoader(true)
        setBotReply("Ok, just wait a second while my digital brain digests that...")
        fetchReply(userInput)
        fetchAnswer(userInput)
    }
 }

 async function fetchReply(userInput) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'text/plain'
        },
        body: `Generate a message to enthusiastically say a question sounds interesting and you need some time to think about it.
        ###
        question: Write a program to print factorial of a number in C.
        message: Wow! that's an interesting question to solve! Give me some time while my digital brain processes your request.
        ###
        question: Write a program to print prime numbers till user given input in C.
        message: I'll spend a few moments considering that. But that's a nice question to practice programming in C.
        ###
        question: ${userInput}
        message:
        `
    })
    const data = await response.json()
    setBotReply(data.reply.choices[0].text.trim());
}

 async function fetchAnswer(userInput) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'text/plain'
        },
        body: `Write a program in C according to the question provided by the user and provide a short description of it.
        ###
        question: Write a program to print factorial of a number in C.
        message: #include <stdio.h>
                 void main()
                 {
                    printf("Hello World!");
                 }
                 // This program prints "Hello World" using the printf function provided by C.
        ###
        question: Write a program to check if a user entered number is prime or not in C.
        message: #include <stdio.h>
                 void main()
                 {
                    int n;
                    printf("Enter a number");
                    scanf("%d", &n);
                    int c = 2;
                    while(c < n)
                    {
                        if(n%c == 0)
                        {
                            printf("Not prime");
                            break;
                        }
                    }
                    printf("Prime");
                 }
        ###
        question: ${userInput} in C.
        message:
        `
    })
    const data = await response.json();
    setCode(data.reply.choices[0].text.trim());
    setLoader(false);
    setUserInput("");
    setBotReply("");
}

  return (
    code ? <MyCodeEditor displayText={code} setDisplayText={setCode} /> : <div className="bg-white w-[95%] lg:w-[40%] mx-auto mt-10 border-none rounded-xl flex flex-col items-center justify-center p-5">
      <div className="flex justify-center items-center">
        <img src="/images/robot.png" alt="" className=" w-60 ml-[-3rem] lg:w-72" />
        <div className="relative w-56 lg:w-56 h-72 bg-[#f3de8a] border-none rounded-xl ml-[-35px] flex justify-center items-center speech--bubble">
          <p className="font-Rubik pl-3">
            {botReply === ""
              ? "Ask me any programming question and I will give it's solution in C language"
              : botReply}
          </p>
        </div>
      </div>

      {loader ? <Logo/> : <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Write a program to print Hello World"
          value={userInput}
          onChange={handleChange}
          className="border-none rounded-lg bg-[#e1e5f2] w-[65%] lg:w-[22rem] p-6 rounded-tr-none rounded-br-none font-Rubik text-[16px] focus:outline-none"
        />
        <button className="w-28 p-[1.39rem] border-none rounded-lg bg-[#fe7f2d] rounded-tl-none rounded-bl-none font-Rubik text-xl text-white cursor-pointer" onClick={handleClick}>
          Ask
        </button>
      </div>}
    </div>
  );
}
