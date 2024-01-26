interface BalaoInfo {
  titulo: string;
  corFundo: string;
}

export function BalaoConversa(props: BalaoInfo) {
  return (
    <div className="mt-[74px] z-30 absolute transition-all duration-200 balaoConversa">
      <div
        className={`${props.corFundo} size-[20px] m-auto rotate-45 rounded-e-lg mb-[-12px] relative`}
      ></div>
      <div
        className={`${props.corFundo} h-[40px] w-[100px] flex flex-col justify-center rounded-[5px] text-center shadow-2xl shadow-white`}
      >
        <p className="text-[1rem] text-white font-bold drop-shadow">
          {props.titulo}
        </p>
      </div>
    </div>
  );
}
