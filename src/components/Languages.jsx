import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { FaPython } from "react-icons/fa";

export default function Language(props) {
  return (
    <>
      <div className="w-full">
        <p className="w-[95%] ml-2 mb-1">
          Please select your favorite language:{" "}
        </p>
        <ul className="flex flex-col justify-center items-center">
          <li
            className="w-[95%] p-1 flex justify-center items-center border-2 border-black rounded-md my-1 cursor-pointer hover:bg-[#DC143C]"
            onClick={() => {
              props.setLanguage("Java");
            }}
          >
            <FaJava /> Java
          </li>
          <li className="w-[95%] p-1 flex justify-center items-center border-2 border-black rounded-md my-1 cursor-pointer hover:bg-[#DC143C]" onClick={() => {props.setLanguage("C++")}}>
            <AiOutlineCode /> C++
          </li>
          <li className="w-[95%] p-1 flex justify-center items-center border-2 border-black rounded-md my-1 cursor-pointer hover:bg-[#DC143C]" onClick={() => {props.setLanguage("C")}}>
            <AiOutlineCode /> C
          </li>
          <li className="w-[95%] p-1 flex justify-center items-center border-2 border-black rounded-md my-1 cursor-pointer hover:bg-[#DC143C]" onClick={() => {props.setLanguage("Python")}}>
            <FaPython /> Python
          </li>
          <li className="w-[95%] p-1 flex justify-center items-center border-2 border-black rounded-md my-1 cursor-pointer hover:bg-[#DC143C]" onClick={() => {props.setLanguage("JavaScript")}}>
            <SiJavascript /> JavaScript
          </li>
        </ul>
      </div>
    </>
  );
}
