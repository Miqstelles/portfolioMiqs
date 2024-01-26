import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BalaoConversa } from "./balaoConversa";

export function Stack() {
  const css = `
  .balaoConversa {
    opacity: 0;
    transition: opacity 300ms, transform 300ms; 
    transform: scale(1.05);
  }
  
  .stack:hover + .balaoConversa {
    display: block;
    opacity: 1;
    transform: scale(1); 
  }
  
  `;

  return (
    <div className="flex gap-8 ml-[12px]">
      <style>{css}</style>

      <div className="flex flex-col items-center">
        <SiTypescript
          className="hover:fill-[#247EE6] transition-all duration-200 drop-shadow-lg hover:scale-105 stack"
          size={64}
          color="#358EF1"
        />
        <BalaoConversa titulo="Typescript" corFundo="bg-[#358EF1]" />
      </div>

      <div className="flex flex-col items-center">
        <SiJavascript
          className="hover:fill-[#D3C015] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#F1DD35"
        />
        <BalaoConversa titulo="Javascript" corFundo="bg-[#F1DD35]" />
      </div>

      <div className="flex flex-col items-center">
        <SiReact
          className="hover:fill-[#06B5Cf] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#04D8F9"
        />
        <BalaoConversa titulo="React" corFundo="bg-[#04D8F9]" />
      </div>

      <div className="flex flex-col items-center">
        <SiTailwindcss
          className="hover:fill-[#2383c7] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#3490D0"
          title="Tailwind CSS"
          id="stack"
        />
        <BalaoConversa titulo="TailwindCSS" corFundo="bg-[#3490D0]" />
      </div>

      <div className="flex flex-col items-center">
        <SiNodedotjs
          className="hover:fill-[#3C873A] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#68A063"
          title="Node.js"
          id="stack"
        />
        <BalaoConversa titulo="Node.js" corFundo="bg-[#68A063]" />
      </div>

      <div className="flex flex-col items-center">
        <SiGit
          className="hover:fill-[#b84129] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#df654c"
          title="GIT"
          id="stack"
        />
        <BalaoConversa titulo="GIT" corFundo="bg-[#df654c]" />
      </div>
    </div>
  );
}
