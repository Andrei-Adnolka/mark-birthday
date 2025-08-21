import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  {
    title: `${ICON} Интерактивная игрушка`,
    link: "https://global.wildberries.ru/product/interaktivnaya-igrushka-dlya-detej-nazhimalka---zhivotnye-231976776?option=366028373",
  },
  { title: `${ICON} Сертификат в ZARA` },
  { title: `${ICON} Сертификат в ДетМир` },
];

const GiftsUI = () => {
  return (
    <div className="gifts">
      <div className="gifts__title">Таааксс. И что же вам мне подарить*</div>
      <div className="gifts__list">
        {CONFIG.map(({ title, link }) => {
          return (
            <div key={title} className="gift">
              {link ? (
                <a
                  href={link}
                  className="gift__link"
                  target="_black"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></a>
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
        * Если что то забронировали, из подарка, проинформи дайте моим представителям знать
      </div>
    </div>
  );
};

export default GiftsUI;
