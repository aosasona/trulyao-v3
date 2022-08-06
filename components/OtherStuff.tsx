import React from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import TextHighlight from "./TextHighlight";

const OtherStuff = () => {
  return (
    <section className="mt-12" id="other-stuff">
      <div>
        <SectionHeader title="Other Stuff" />
        <p className="text-faded leading-relaxed text-sm">
          The following is a list of the <TextHighlight>personal</TextHighlight>{" "}
          projects and products that I have worked on or to which I have{" "}
          <TextHighlight>contributed</TextHighlight> in some other capacity.
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mt-6">
          <ProjectCard
            name="Frikax"
            description="The all-in-one social media for Techies - coming soon"
            github="https://www.frikax.net"
            website="https://www.frikax.net"
          />

          <ProjectCard
            name="AerDeets"
            description="All things tech - news, reviews, coding tutorials, and more"
            github="https://github.com/aosasona/aerdeets"
            website="https://www.aerdeets.com"
          />

          <ProjectCard
            name="PHPRouter"
            description="A PHP composer package that brings Express-like routing to 'vanilla' PHP (No frameworks)"
            github="https://github.com/aosasona/php-router"
            website="https://phprouter.herokuapp.com/"
          />

          <ProjectCard
            name="Noxis"
            description="Quick, easy and anonymous conversations - POC (early version)"
            github="https://noxis.chat/"
            website="https://noxis.chat/"
          />

          <ProjectCard
            name="HitList CLI"
            description="Run multiple terminal commands with one hit; anytime, anywhere!"
            github="https://github.com/hitlist-cli/cli"
            website="https://www.hitlist.dev"
          />

          <ProjectCard
            name="Scrawny"
            description="Lightweight request logger for Node.js - WIP"
            github="https://github.com/aosasona/Scrawny"
            website="https://github.com/aosasona/Scrawny"
          />
        </section>
      </div>
    </section>
  );
};

export default OtherStuff;
