import { FC, ReactNode } from "react";

interface Props {
  children: any;
}

const HeroHeader: FC<Props> = ({ children }) => {
  return (
    <div className="select-none">
      {[...children].map((word, index) => (
        <span
          key={index}
          className="text-[14vw] lg:text-[6.75vw] font-bold hover:text-white transition-all"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default HeroHeader;
