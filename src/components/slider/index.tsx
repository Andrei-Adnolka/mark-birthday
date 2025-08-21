import s1 from "../../photos/1.jpg";
import s2 from "../../photos/2.jpg";
import s3 from "../../photos/3.jpg";
import s4 from "../../photos/4.jpg";
import s5 from "../../photos/5.jpg";
import s6 from "../../photos/6.jpg";
import s7 from "../../photos/7.jpg";
import s8 from "../../photos/8.jpg";
import s9 from "../../photos/9.jpg";
import s11 from "../../photos/11.jpg";
import s12 from "../../photos/12.jpg";
import s13 from "../../photos/13.jpg";
import s14 from "../../photos/14.jpg";
import s15 from "../../photos/15.jpg";
import s16 from "../../photos/16.jpg";
import s17 from "../../photos/17.jpg";

import "./style.scss";

const images = [
  { original: s1, hint: "El Tomato" },
  { original: s5, hint: "Папа выключил свою музыку" },
  { original: s4, hint: "Папа включил свою музыку" },
  { original: s2, hint: "Йа акуля" },
  { original: s3, hint: "С малышками" },
  { original: s7, hint: "Фото на паспорт" },
  { original: s8, hint: "Фото на паспорт" },
  { original: s9, hint: "Надо взять у бати бритву" },
  { original: s11, hint: "На чиле, на расслабоне" },
  { original: s12, hint: "Я у мамы Археолог" },
  { original: s13, hint: "Цветооочки" },
  { original: s14, hint: "Арендовал корабль для сестрички" },
  { original: s15, hint: "С другом на перекусе" },
  { original: s16, hint: "Крестная" },
  { original: s17, hint: "Май литл бургер" },
  { original: s6, hint: "Вкуснятина" },
];

const SliderUI = ({ className }: { className: string }) => {
  return (
    <div className={`slider__wrapper ${className}`}>
      <div className="slider_title">Вот вам немного меня</div>
      <div className="slider_images">
        {images.map((el) => {
          return (
            <div className="slider_image">
              <img src={el.original} alt="asdas" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SliderUI;
