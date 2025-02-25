/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start md:justify-center gap-x-20 gap-y-8'>
      {technologies.slice(0, 6).map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {technologies.slice(7, 15).map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
