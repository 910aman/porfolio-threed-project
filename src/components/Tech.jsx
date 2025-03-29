/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies_1, technologies_2 } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start md:justify-center gap-x-20 gap-y-8'>
      <Tech_1 />
      <Tech_2 />
    </div>
  );
};

const Tech_1 = () => (
  <div>
    {
      technologies_1.reverse.map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technology.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
  </div>
)
const Tech_2 = () => (
  <div>
    {
      technologies_2.map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technology.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
  </div>
)

export default SectionWrapper(Tech, "");
