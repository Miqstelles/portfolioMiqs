import narutoweb from "../assets/naruto-web.png";
import { Stack } from "../components/stack";

export function Projects() {
  return (
    <div className="flex justify-center items-center w-full h-[940px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
      <div className="flex flex-col items-start w-[80%] h-[80%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-2xl drop-shadow-lg">
        <div className="flex items-center justify-center mt-[44px] gap-[32px]">
          <p className="text-white text-[44px] font-extrabold drop-shadow-lg">
            NARUTO WEB
          </p>

          <Stack />
        </div>

        <img src={narutoweb} width={700} className="drop" />
      </div>
    </div>
  );
}
