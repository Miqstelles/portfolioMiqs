import { useState } from "react";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`w-screen h-screen antialiased p-4 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-full flex flex-row-reverse">
        <button
          onClick={() => setDarkMode(true)}
          className={`${darkMode ? "hidden" : "block"}
           border-[1px] rounded-xl p-1`}
        >
          <MdOutlineModeNight size={28} />
        </button>

        <button
          onClick={() => setDarkMode(false)}
          className={`${!darkMode ? "hidden" : "block"} 
          border-[1px] rounded-xl p-1`}
        >
          <MdOutlineLightMode size={28} fill="white" />
        </button>
      </div>

      <div
        className={`max-w-xl mx-auto mt-[30vh] flex flex-col gap-6 tracking-wide font-semibold shadow-3xl rounded p-4 ${
          darkMode && "shadow-white"
        }`}
      >
        <h1 className={`text-xl ${darkMode ? "text-white" : "text-[#2f2f31]"}`}>
          Oi, eu sou Miquéias, um desenvolvedor frontend que gosta de
          transformar ideias em realidade. Como faço isso? através de linhas de
          código.
        </h1>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <button className="flex flex-col items-center">
          <p className="font-light text-xl">Projetos</p>
          <SlArrowDown size={32} />
        </button>
      </div>
    </div>
  );
}

export default App;
