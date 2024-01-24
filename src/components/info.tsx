import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";

export function Info() {
  return (
    <>
      <div className="flex items-end  justify-between mr-[84px]">
        <h2 className="text-[1.25rem] select-none sm:text-[2.8rem] ml-[5px] mb-[8px] lg:ml-[18px] text-left text-white font-extrabold leading-none drop-shadow-lg">
          OLÁ, ME CHAMO MIQUÉIAS
        </h2>

        <div className="flex z-30">
          <a
            href="https://www.linkedin.com/in/miqueiastelles/"
            target="_blank"
            title="Linkedin"
          >
            <AiFillLinkedin
              className="hover:scale-105 hover:fill-white transition-all duration-200  drop-shadow-lg"
              size={128}
              color="#fed7aa"
            />
          </a>

          <a
            href="https://github.com/Miqstelles"
            target="_blank"
            title="Github"
          >
            <AiFillGithub
              className="hover:scale-105 hover:fill-white transition-all duration-200  drop-shadow-lg"
              size={128}
              color="#fed7aa"
            />
          </a>

          <a
            href="https://drive.google.com/file/d/1uZQO1i3wHX7N7gG3PonylMyEhLiXvyiQ/view?usp=sharing"
            target="_blank"
            title="Curriculum Vitae"
          >
            <RiFilePaper2Fill
              className="hover:scale-105 hover:fill-white transition-all duration-200 drop-shadow-lg"
              size={128}
              color="#fed7aa"
            />
          </a>
        </div>
      </div>

      <h1 className="text-[3.5rem] select-none sm:text-[6rem] lg:text-[12rem] text-justify text-white font-extrabold leading-none drop-shadow-lg">
        SOFTWARE DEVELOPER
      </h1>
    </>
  );
}
