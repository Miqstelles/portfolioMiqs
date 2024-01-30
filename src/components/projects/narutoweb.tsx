import { AiFillGithub } from "react-icons/ai";
import narutoweb from "../../assets/naruto-web.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Technologies } from "./technologies";

export function NarutoWeb() {
  return (
    <div className="flex justify-center w-[95%] h-[80%] md:size-[80%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-sm drop-shadow-lg hover:shadow-2xl hover:shadow-white transition-all duration-200">
      <div className="flex flex-col justify-between m-[32px]">
        <div className="w-full flex justify-between items-center">
          <p className="text-white text-[1.6rem] md:text-[2.75rem] font-extrabold drop-shadow-lg">
            NARUTO WEB
          </p>

          <div className="flex">
            <a href="https://narutoweb.vercel.app" target="_blank">
              <LiaExternalLinkAltSolid className="fill-white size-[44px] md:size-[64px] hover:fill-gray-200 transition-all duration-200" />
            </a>

            <a href="https://github.com/Miqstelles/naruto-web" target="_blank">
              <AiFillGithub className="fill-white size-[44px] md:size-[64px] hover:fill-gray-200 transition-all duration-200" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <img src={narutoweb} className="drop-shadow-lg w-[100%] md:w-[60%]" />

          <h1 className="text-white text-[1.5rem] xl:text-[2rem] font-extralight text-center lg:text-left">
            Naruto WEB é um site para que os fãs possam encontrar curiosidades e
            informações sobre seus personagens favoritos.
          </h1>
        </div>

        <Technologies />
      </div>
    </div>
  );
}
