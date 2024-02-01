interface speechBubbleInfo {
  titulo: string;
  corFundo: string;
}

export function SpeechBubble(props: speechBubbleInfo) {
  return (
    <div className="mt-[38px] sm:mt-[74px] absolute transition-all duration-200 balaoConversa z-[30]">
      <div
        className={`${props.corFundo} size-[15px] sm:size-[20px] m-auto rotate-45 rounded-e-lg mb-[-12px] relative`}
      />

      <div
        className={`${props.corFundo} h-[30px] w-[80px] sm:h-[40px] sm:w-[100px] flex flex-col justify-center rounded-[5px] text-center shadow-2xl shadow-white`}
      >
        <p className="text-[0.8rem] sm:text-[1rem] text-white font-bold drop-shadow">
          {props.titulo}
        </p>
      </div>
    </div>
  );
}
