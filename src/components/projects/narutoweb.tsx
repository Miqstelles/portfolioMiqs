import narutoweb from "../../assets/naruto-web.png";

export function NarutoWeb() {
  return (
    <div className="w-[80%] h-[80%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-2xl drop-shadow-lg hover:shadow-lg hover:shadow-white transition-all duration-200">
      <div className="flex flex-col items-center mt-[18px] m-[32px] ">
        <p className="text-white text-[44px] text-center font-extrabold drop-shadow-lg">
          NARUTO WEB
        </p>

        <img src={narutoweb} className="drop-shadow-lg w-[60%] mt-[48px]" />
      </div>
    </div>
  );
}
