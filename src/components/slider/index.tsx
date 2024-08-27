import s1 from "../../photos/1.jpg";
import s2 from "../../photos/2.jpg";
import s3 from "../../photos/3.jpg";
import s4 from "../../photos/4.jpg";
import s5 from "../../photos/5.jpg";
import s6 from "../../photos/6.jpg";
import s7 from "../../photos/7.jpg";
import s8 from "../../photos/8.jpg";
import s9 from "../../photos/9.jpg";
import s10 from "../../photos/10.jpg";
import s11 from "../../photos/11.jpg";
import s12 from "../../photos/12.jpg";
import s13 from "../../photos/13.jpg";
import s14 from "../../photos/14.jpg";
import s15 from "../../photos/15.jpg";
import s16 from "../../photos/16.jpg";
import s17 from "../../photos/17.jpg";
import s18 from "../../photos/18.jpg";
import s19 from "../../photos/19.jpg";
import s20 from "../../photos/20.jpg";
import s21 from "../../photos/21.jpg";
import s22 from "../../photos/22.jpg";
import s23 from "../../photos/23.jpg";
import s24 from "../../photos/24.jpg";
import s25 from "../../photos/25.jpg";
import s26 from "../../photos/26.jpg";
import s27 from "../../photos/27.jpg";
import s29 from "../../photos/29.jpg";

import "./style.scss";

const images = [
  { original: s1, hint: "El Tomato" },
  { original: s2, hint: "Йа акуля" },
  { original: s3, hint: "С малышками" },
  { original: s4, hint: "Папа включил свою музыку" },
  { original: s5, hint: "Папа выключил свою музыку" },
  { original: s6, hint: "Вкуснятина" },
  { original: s7, hint: "Фото на паспорт" },
  { original: s8, hint: "Баааабушка" },
  { original: s9, hint: "Надо взять у бати бритву" },
  { original: s10, hint: "Мистер чернозем 2022" },
  { original: s11, hint: "На чиле, на расслабоне" },
  { original: s12, hint: "Я у мамы Археолог" },
  { original: s13, hint: "Цветооочки" },
  { original: s14, hint: "Арендовал корабль для сестрички" },
  { original: s15, hint: "С другом на перекусе" },
  { original: s16, hint: "Крестная" },
  { original: s17, hint: "Май литл бургер" },
  { original: s18, hint: "Бууууукляяяя" },
  { original: s19, hint: "Хошь круассан??" },
  { original: s20, hint: "Бахнув пельмешек" },
  { original: s21, hint: "Снежок" },
  { original: s22, hint: "Новенький в группе 'Серебро'" },
  { original: s23, hint: "Снежок 2" },
  { original: s24, hint: "Ля, снежок" },
  { original: s25, hint: "Че ты сказал?" },
  { original: s26, hint: "Каарууселька" },
  { original: s27, hint: "Усталь" },
  { original: s29, hint: "МММммммм" },
];

const SliderUI = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider_title">Вот вам немного меня</div>
      <div className="slider_images">
        {images.map((el) => {
          return (
            <div className="slider_image">
              <img src={el.original} alt="asdas" loading="lazy" />
              <span>{el.hint}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SliderUI;
