/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-x-20 gap-y-8'>
      {technologies.map((technology) => (
        <div className='w-40 h-40' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
