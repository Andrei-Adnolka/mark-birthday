import s1 from "../../photos/1.jpg";
import s2 from "../../photos/2.jpg";
import s3 from "../../photos/3.jpg";
import s4 from "../../photos/4.jpg";
import s5 from "../../photos/5.jpg";
import s6 from "../../photos/6.jpg";
import s7 from "../../photos/7.jpg";

import "./style.scss";

const images = [
  { original: s1, thumbnail: s1, hint: "El Tomato" },
  { original: s2, thumbnail: s2, hint: "Йа акуля" },
  { original: s3, thumbnail: s3, hint: "С малышками" },
  { original: s4, thumbnail: s4, hint: "Папа включил свою музыку" },
  { original: s5, thumbnail: s5, hint: "Папа выключил свою музыку" },
  { original: s6, thumbnail: s6, hint: "Вкуснятина" },
  { original: s7, thumbnail: s7, hint: "Фото на паспорт" },
];

const SliderUI = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider_title">Вот вам немного меня</div>
      <div className="slider_images">
        {images.map((el) => {
          return (
            <div className="slider_image">
              <img src={el.original} alt="asdas" />
              <span>{el.hint}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SliderUI;
