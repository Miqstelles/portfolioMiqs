import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function Stack() {
  return (
    <div className="flex gap-8 ml-[12px]">
      <SiTypescript
        className="hover:fill-[#247EE6] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#358EF1"
        title="Typescript"
      />

      <SiJavascript
        className="hover:fill-[#D3C015] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#F1DD35"
        title="Javascript"
      />

      <SiReact
        className="hover:fill-[#06B5Cf] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#04D8F9"
        title="React"
      />

      <SiTailwindcss
        className="hover:fill-[#2383c7] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#3490D0"
        title="Tailwind CSS"
      />

      <SiNodedotjs
        className="hover:fill-[#3C873A] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#68A063"
        title="Node.js"
      />

      <SiGit
        className="hover:fill-[#b84129] transition-all duration-200 drop-shadow-lg"
        size={64}
        color="#df654c"
        title="GIT"
      />
    </div>
  );
}
