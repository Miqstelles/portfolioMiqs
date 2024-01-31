import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Technologies } from "./technologies";

interface ProjectInfo {
  title: string;
  site: string;
  gitRepo: string;
  image: string;
  info: string;
}

export function ProjectInfo(props: ProjectInfo) {
  return (
    <div className="flex justify-center w-[95%] h-[90%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-sm drop-shadow-lg hover:shadow-2xl hover:shadow-white transition-all duration-200">
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
          <img
            src={props.image}
            className="drop-shadow-lg w-[100%] md:w-[60%]"
          />

          <h1 className="text-white text-[1.5rem] xl:text-[2rem] font-extralight text-center lg:text-left">
            {props.info}
          </h1>
        </div>

        <Technologies />
      </div>
    </div>
  );
}
