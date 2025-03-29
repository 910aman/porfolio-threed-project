/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies_1,technologies_2 } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start md:justify-center gap-x-20 gap-y-8'>
      {/* {technologies_1.map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technologies_1.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
      {technologies_2.map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technologies_2.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
