import ImageGallery from "react-image-gallery";

import s1 from "../../photos/slider-0.jpg";
import s2 from "../../photos/slider-1.jpg";
import s3 from "../../photos/slider-2.jpg";
import s4 from "../../photos/slider-3.jpg";
import s5 from "../../photos/slider-4.jpg";
import s6 from "../../photos/slider-5.jpg";
import s7 from "../../photos/slider-6.jpg";
import s8 from "../../photos/slider-7.jpg";
import s9 from "../../photos/slider-8.jpg";

import "./style.scss";

const images = [
  { original: s9, thumbnail: s9 },
  { original: s2, thumbnail: s2 },
  { original: s3, thumbnail: s3 },
  { original: s4, thumbnail: s4 },
  { original: s5, thumbnail: s5 },
  { original: s6, thumbnail: s6 },
  { original: s7, thumbnail: s7 },
  { original: s8, thumbnail: s8 },
  { original: s1, thumbnail: s1 },
];

const SliderUI = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider_title">Вот вам немного меня</div>
      <ImageGallery
        items={images}
        lazyLoad
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        thumbnailPosition="right"
      />
    </div>
  );
};
export default SliderUI;
