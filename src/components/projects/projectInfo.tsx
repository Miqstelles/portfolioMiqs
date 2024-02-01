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

import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Technologies } from "./technologies";
import { ImageSlider } from "../imageSlider";

const stacks = [
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

interface ProjectInfo {
  title: string;
  site: string;
  gitRepo: string;
  image: string[];
  info: string;
  color: string;
  stacks: number[];
}

export function ProjectInfo(props: ProjectInfo) {
  return (
    <div
      className={`card flex justify-center bg-gradient-to-r ${props.color} rounded-sm drop-shadow-lg hover:shadow-2xl hover:shadow-white transition-all duration-200`}
    >
      <div className="flex flex-col justify-between m-[32px]">
        <div className="w-full flex justify-between items-center">
          <p className="text-white text-[1.6rem] md:text-[2.75rem] font-extrabold drop-shadow-lg">
            {props.title}
          </p>

          <div className="flex">
            <a href={props.site} target="_blank">
              <LiaExternalLinkAltSolid className="fill-white size-[44px] md:size-[64px] hover:fill-gray-200 transition-all duration-200" />
            </a>

            <a href={props.gitRepo} target="_blank">
              <AiFillGithub className="fill-white size-[44px] md:size-[64px] hover:fill-gray-200 transition-all duration-200" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <ImageSlider slides={props.image} />

          <h1 className="text-white text-[1.5rem] xl:text-[2rem] font-extralight text-center lg:text-left">
            {props.info}
          </h1>
        </div>

        <Technologies stacks={props.stacks.map((index) => stacks[index])} />
      </div>
    </div>
  );
}
