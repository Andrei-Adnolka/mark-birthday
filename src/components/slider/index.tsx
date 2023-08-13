import { useState } from "react";
import FsLightbox from "fslightbox-react";

import s1 from "../../photos/slider-0.jpg";
import s2 from "../../photos/slider-1.jpg";
import s3 from "../../photos/slider-2.jpg";
import s4 from "../../photos/slider-3.jpg";
import s5 from "../../photos/slider-4.jpg";
import s6 from "../../photos/slider-5.jpg";

const SliderUI = () => {
  const [toggler, setToggler] = useState(false);
  console.log("here");
  return <FsLightbox toggler sources={[s1, s2, s3, s4, s5, s6]} />;
};
export default SliderUI;
