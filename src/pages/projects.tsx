import { NarutoWeb } from "../components/projects/narutoweb";

export function Projects() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
      <h1 className="text-white text-[44px] font-extrabold drop-shadow-lg mb-[28px]">
        MEUS PROJETOS
      </h1>
      <NarutoWeb />
    </div>
  );
}
