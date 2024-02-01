import { SpeechBubble } from "../speechBubble";
import { IconType } from "react-icons";

interface StackInfo {
  IconComponent: IconType;
  title: string;
  color: string;
}

const css = `
    .balaoConversa {
      opacity: 0;
      transition: opacity 300ms, transform 300ms; 
      transform: scale(1.05);
    }
    
    .stack:hover + .balaoConversa {
      display: block;
      opacity: 1;
      transform: scale(1); 
    }
`;

export function Technologies(props: { stacks?: StackInfo[] }) {
  const stacksToRender = props.stacks || [];

  return (
    <div className="flex flex-row flex-wrap gap-4 md:gap-8 mt-[8px] mr-[50px] sm:mr-[72px] md:mr-0 md:mt-0 md:ml-[14px]">
      <style>{css}</style>

      {stacksToRender.map((stack, index) => (
        <span key={index} className="flex flex-col items-center">
          <stack.IconComponent
            className={`size-[32px] sm:size-[44px] xl:size-[64px] transition-all duration-200 drop-shadow-lg stack`}
            color={stack.color.substring(4, stack.color.length - 1)}
            id="stack"
          />

          <SpeechBubble titulo={stack.title} corFundo={stack.color} />
        </span>
      ))}
    </div>
  );
}
