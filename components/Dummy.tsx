import { FunctionComponentElement } from "react";

type Props = {
  name?: string;
};

export default function Dummy(): FunctionComponentElement<Props> {
  return <div>Dummy Component</div>;
}
