import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

import { BalaoConversa } from "./balaoConversa";
import { IconType } from "react-icons";

interface StackInfo {
  IconComponent: IconType;
  title: string;
  color: string;
}

const stacks: StackInfo[] = [
  { IconComponent: SiTypescript, title: "Typescript", color: "bg-[#358EF1]" },
  { IconComponent: SiJavascript, title: "Javascript", color: "bg-[#F1DD35]" },
  { IconComponent: SiReact, title: "React", color: "bg-[#04D8F9]" },
  { IconComponent: SiTailwindcss, title: "TailwindCSS", color: "bg-[#3490D0]" },
  { IconComponent: SiNodedotjs, title: "Node.js", color: "bg-[#68A063]" },
  { IconComponent: SiGit, title: "GIT", color: "bg-[#df654c]" },
];

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
    <div className="flex gap-8 ml-[14px]">
      <style>{css}</style>

      {stacks.map((stack, index) => (
        <div key={index} className="flex items-center">
          <stack.IconComponent
            className={`size-[32px] md:size-[64px] transition-all duration-200 drop-shadow-lg stack`}
            color={stack.color.substring(4, stack.color.length - 1)}
            id="stack"
          />
          <BalaoConversa titulo={stack.title} corFundo={stack.color} />
        </div>
      ))}
    </div>
  );
}
