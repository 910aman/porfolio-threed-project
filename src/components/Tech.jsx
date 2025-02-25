/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start md:justify-center gap-x-20 gap-y-8'>
      {technologies.slice(0, 4).map((technology) => (
        <div className='md:w-40 md:h-40 w-20 h-20' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {technologies.slice(4, 9).map((technology) => (
        <div className='md:w-40 md:h-40 w-20 h-20' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {technologies.slice(9, 12).map((technology) => (
        <div className='md:w-40 md:h-40 w-20 h-20' key={technology.name} title={technologies.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
