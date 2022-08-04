import { FC, useState } from "react";

interface Props {
  name: string;
  level: number;
  learning?: boolean;
}

const SkillsRating: FC<Props> = ({ name, level, learning = false }) => {
  const [showSkills, setShowSkills] = useState(false);

  const skillsPercent = ((level / 10) * 100).toFixed(0);

  return (
    <div
      className="bg-neutral-800 bg-opacity-40 px-4 lg:px-6 py-6 lg:py-6 rounded-sm drop-shadow-lg select-none"
      onDoubleClick={() => setShowSkills(!showSkills)}
    >
      <div className="h-auto flex justify-between items-center">
        <p className="text-sm text-primary">{name}</p>
        {learning && (
          <p className="w-max bg-neutral-800 text-neutral-500 text-[10px] font-normal px-3 py-1">
            GETTING STARTED
          </p>
        )}
      </div>
      {showSkills && (
        <div className="relative w-full h-[4px] bg-neutral-800 mt-5">
          <div
            className="h-full bg-faded absolute left-0 top-0 bottom-0"
            style={{ width: `${skillsPercent}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default SkillsRating;
