import React from "react";
import SectionHeader from "./SectionHeader";
import TextHighlight from "./TextHighlight";

const OtherStuff = () => {
  return (
    <section className="mt-12" id="other-stuff">
      <div>
        <SectionHeader title="Other Stuff" />
        <p className="text-faded leading-relaxed text-sm">
          These are the personal projects/products that I have worked on or
          other ones I have contributed to.
        </p>{" "}
      </div>
    </section>
  );
};

export default OtherStuff;
