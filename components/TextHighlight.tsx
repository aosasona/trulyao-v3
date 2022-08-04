import React, { FC } from "react";

interface Props {
  children: any;
}

const TextHighlight: FC<Props> = ({ children }) => {
  return <span className="text-neutral-400">{children}</span>;
};

export default TextHighlight;
