import "./style.scss";

import im1 from "../../photos/gift-1.png";
import im2 from "../../photos/gift-2.png";
import im3 from "../../photos/gift-3.png";
import im4 from "../../photos/gift-4.png";
import im5 from "../../photos/gift-5.png";
import im6 from "../../photos/gift-6.png";
import im7 from "../../photos/gift-7.png";
import im8 from "../../photos/gift-8.png";
import im9 from "../../photos/gift-9.png";

const ICON = "🎁";

const CONFIG = [
  {
    img: im7,
    link: "https://www.wildberries.by/catalog/196864047/detail.aspx?size=319390679",
    title: "Детская Кухня",
  },
  {
    img: im8,
    link: "https://www.wildberries.by/catalog/63059593/detail.aspx?size=111126730",
    title: "Книга нажимная интерактивная",
  },
  {
    img: im9,
    link: "https://www.wildberries.by/catalog/270775725/detail.aspx?size=418589396",
    title: "Детский игровой набор",
  },
  {
    img: im1,
    link: "https://www.wildberries.by/catalog/221242074/detail.aspx",
    title: "Динозавры любые наборы (пример)",
  },
  {
    img: im2,
    link: "https://www.wildberries.by/catalog/262260444/detail.aspx?targetUrl=EX",
    title: "Раскопки любые (пример)",
  },
  {
    img: im3,
    link: "https://www.wildberries.by/catalog/144708417/detail.aspx?size=244033050",
    title: "Детский фотоаппарат",
  },
  {
    img: im4,
    title: "Набор для изучения насекомых",
    link: "https://www.wildberries.ru/catalog/165226683/detail.aspx?size=275153014&utm_source=followish",
  },
  {
    img: im5,
    title: "Набор опытов",
    link: "https://www.wildberries.by/catalog/345902472/detail.aspx?size=513430084",
  },
  {
    img: im6,
    title: "Аквапузики",
    link: "https://www.wildberries.by/catalog/267629878/detail.aspx?size=414607111",
  },
  {
    title: `${ICON} Сертификат в ZARA <br/> <br/> ${ICON} Сертификат в ДетМир`,
  },
];

const GiftsUI = () => {
  return (
    <div className="gifts card">
      <div className="gifts__title">Таааксс. И что же вам мне подарить*</div>
      <div className="gifts__list">
        {CONFIG.map(({ title, link, img: imgLink }) => {
          return (
            <div key={title} className="gift">
              {link ? (
                <a href={link} className="gift__link" target="_black">
                  <img className="gift__image" src={imgLink} alt="gift" />
                  <span>{title}</span>
                </a>
              ) : (
                <span
                  className="gift__span"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="gifts__note">
        * Если что то забронировали, из подарка, дайте моим представителям знать
      </div>
    </div>
  );
};

export default GiftsUI;
