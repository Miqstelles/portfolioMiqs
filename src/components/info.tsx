import { IconType } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";

interface Info {
  IconComponent: IconType;
  title: string;
  url: string;
  color: string;
}

const InfoComponentes: Info[] = [
 {IconComponent: AiFillLinkedin, title: "Linkedin", url: "https://www.linkedin.com/in/miqueiastelles/", color: "#fed7aa"},
 {IconComponent: AiFillGithub, title: "Github", url: "https://github.com/Miqstelles/", color: "#fed7aa"},
 {IconComponent: RiFilePaper2Fill, title: "Curriculum Vitae", url: "https://drive.google.com/file/d/1uZQO1i3wHX7N7gG3PonylMyEhLiXvyiQ/view?usp=sharing", color: "#fed7aa"}
]

export function Info() {
  return (
    <>
      <div className="flex items-end  justify-between mr-[84px]">
        <h2 className="text-[1.25rem] select-none sm:text-[2.8rem] ml-[5px] mb-[8px] lg:ml-[18px] text-left text-white font-extrabold leading-none drop-shadow-lg">
          OLÁ, ME CHAMO MIQUÉIAS
        </h2>

        {InfoComponentes.map((info, index) => (
          <div className="flex z-30" key={index}>
              <a href={info.url} target="_blank" title={info.title}>
                <info.IconComponent
                  className="hover:scale-105 hover:fill-white transition-all duration-200  drop-shadow-lg"
                  color={info.color}
                  size={128}
                />
              </a>
          </div>
        ))}
      </div>

      <h1 className="text-[3.5rem] select-none sm:text-[6rem] lg:text-[12rem] text-justify text-white font-extrabold leading-none drop-shadow-lg">
        SOFTWARE DEVELOPER
      </h1>
    </>
  );
}