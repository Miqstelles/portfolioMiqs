interface BalaoInfo {
  titulo: string;
  corFundo: string;
}

export function BalaoConversa(props: BalaoInfo) {
  return (
    <div className="mt-[74px] z-30 absolute hidden transition-all duration-200 balaoConversa">
      <div
        className={`bg-[#${props.corFundo}] size-[20px] m-auto rotate-45 rounded-e-lg mb-[-12px] relative`}
      ></div>
      <div
        className={`bg-[#000] h-[40px] w-[90px] flex flex-col justify-center rounded-[5px] text-center`}
      >
        <p className="text-[1rem] text-white font-medium">{props.titulo}</p>
      </div>
    </div>
  );
}
