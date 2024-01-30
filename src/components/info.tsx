import { IconType } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import { Stack } from "../components/stack";

interface Info {
  IconComponent: IconType;
  title: string;
  url: string;
  color: string;
}

const InfoComponentes: Info[] = [
  {
    IconComponent: AiFillLinkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/miqueiastelles/",
    color: "#fed7aa",
  },
  {
    IconComponent: AiFillGithub,
    title: "Github",
    url: "https://github.com/Miqstelles/",
    color: "#fed7aa",
  },
  {
    IconComponent: RiFilePaper2Fill,
    title: "Curriculum Vitae",
    url: "https://drive.google.com/file/d/1uZQO1i3wHX7N7gG3PonylMyEhLiXvyiQ/view?usp=sharing",
    color: "#fed7aa",
  },
];

export function Info() {
  return (
    <>
      <div className="flex flex-col-reverse items-start sm:mr-[94px] md:mr-0 md:flex-row md:items-end">
        <h2 className="text-[1.45rem] select-none sm:text-[2rem] lg:text-[2.8rem] xl:text-[3.2rem] mb-[8px] text-left text-white font-extrabold leading-none drop-shadow-lg">
          OLÁ, ME CHAMO MIQUÉIAS
        </h2>

        <div className="flex justify-start md:flex-none ml-[-8px] md:ml-0">
          {InfoComponentes.map((info, index) => (
            <div className="flex z-30 justify-end" key={index}>
              <a href={info.url} target="_blank" title={info.title}>
                <info.IconComponent
                  className="size-[84px] md:size-[94px] xl:size-[128px] hover:scale-105 hover:fill-white transition-all duration-200 drop-shadow-lg"
                  color={info.color}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-justify text-[3.6rem] select-none sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white font-extrabold leading-none drop-shadow-lg">
          FULLSTACK
        </h1>

        <h1 className="text-justify text-[3.6rem] select-none sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white font-extrabold leading-none drop-shadow-lg">
          DEVELOPER
        </h1>

        <Stack />
      </div>
    </>
  );
}
