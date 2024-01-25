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
      display: none;
      opacity: 0; 
    }
    
    .stack:hover + .balaoConversa {
      display: block;
      opacity: 1; 
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
        <BalaoConversa titulo="Typescript" corFundo="358EF1" />
      </div>

      <div className="flex flex-col items-center">
        <SiJavascript
          className="hover:fill-[#D3C015] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#F1DD35"
        />
        <BalaoConversa titulo="Javascript" corFundo="F1DD35" />
      </div>

      <div className="flex flex-col items-center">
        <SiReact
          className="hover:fill-[#06B5Cf] transition-all duration-200 drop-shadow-lg stack"
          size={64}
          color="#04D8F9"
        />
        <BalaoConversa titulo="React" corFundo="04D8F9" />
      </div>

      <SiTailwindcss
        className="hover:fill-[#2383c7] transition-all duration-200 drop-shadow-lg stack"
        size={64}
        color="#3490D0"
        title="Tailwind CSS"
        id="stack"
      />

      <SiNodedotjs
        className="hover:fill-[#3C873A] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#68A063"
        title="Node.js"
        id="stack"
      />

      <SiGit
        className="hover:fill-[#b84129] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#df654c"
        title="GIT"
        id="stack"
      />
    </div>
  );
}
