import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiRedux,
  SiVercel,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";

import { SpeechBubble } from "../speechBubble";
import { IconType } from "react-icons";

interface StackInfo {
  IconComponent: IconType;
  title: string;
  color: string;
}
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

const stacks: StackInfo[] = [
  { IconComponent: SiTypescript, title: "Typescript", color: "bg-[#358EF1]" },
  { IconComponent: SiJavascript, title: "Javascript", color: "bg-[#F1DD35]" },
  { IconComponent: SiReact, title: "React", color: "bg-[#04D8F9]" },
  { IconComponent: SiTailwindcss, title: "TailwindCSS", color: "bg-[#3490D0]" },
  { IconComponent: SiNodedotjs, title: "Node.js", color: "bg-[#68A063]" },
  { IconComponent: SiGit, title: "GIT", color: "bg-[#df654c]" },
  { IconComponent: SiRedux, title: "Redux", color: "bg-[#764ABC]" },
  { IconComponent: SiVercel, title: "Vercel", color: "bg-[#000000]" },
  { IconComponent: SiFramer, title: "Framer", color: "bg-[#15abfb]" },
  {
    IconComponent: SiReactrouter,
    title: "React Router DOM",
    color: "bg-[#e42f0b]",
  },
];

export function Technologies() {
  return (
    <div className="flex flex-row flex-wrap gap-4 md:gap-8 mt-[8px] mr-[50px] sm:mr-[72px] md:mr-0 md:mt-0 md:ml-[14px]">
      <style>{css}</style>

      {stacks.map((stack, index) => (
        <span key={index} className="flex flex-col items-center">
          <stack.IconComponent
            className={`size-[32px] sm:size-[44px] xl:size-[64px] transition-all duration-200 drop-shadow-lg stack`}
            color={stack.color.substring(4, stack.color.length - 1)}
            id="stack"
          />

          <SpeechBubble titulo={stack.title} corFundo={stack.color} />
        </span>
      ))}
    </div>
  );
}
