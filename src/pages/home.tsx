import { Stack } from "../components/stack";
import { Info } from "../components/info";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700">
      <div className="flex flex-col justify-center m-[20%]">
        <Info />
        <Stack />
      </div>
    </div>
  );
}
