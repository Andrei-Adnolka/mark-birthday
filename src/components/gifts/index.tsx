import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  {
    title: `${ICON} Интерактивная игрушка`,
    link: "https://global.wildberries.ru/product/interaktivnaya-igrushka-dlya-detej-nazhimalka---zhivotnye-231976776?option=366028373",
  },
  {
    title: `${ICON} Интерактивная игрушка 2`,
    link: "https://global.wildberries.ru/product/interaktivnaya-igrushka-bukmark-s-knigoj-pro-zhivotnykh-116046186?option=207602371",
  },
  {
    title: `${ICON} Детский беговел`,
    link: "https://global.wildberries.ru/product/detskij-begovel-dlya-malyshej-ot-2-let-na-rost-80-120-sm-200067412?option=323523020",
  },
  {
    title: `${ICON} Конструктор`,
    link: "https://www.funtastik.by/igrushki/konstruktory-polese/",
  },
  {
    title: `${ICON} Баскетбольное кольцо`,
    link: "https://global.wildberries.ru/product/basketbolnoe-koltso-detskoe-221596072?option=351999857",
  },
  {
    title: `${ICON} Грузовик автовоз с машинкой`,
    link: "https://global.wildberries.ru/product/331885-gruzovik-avtovoz-s-mashinkoj-igrushechnyj-transport-41131794?option=82793943",
  },
  {
    title: `${ICON} Детский растущий стул и стол`,
    link: "https://global.wildberries.ru/product/91030-detskij-rastushhij-stul-i-stol-komplekt-mebeli-white-180326244?option=298056923",
  },
  {
    title: `${ICON} Кулер для воды детский`,
    link: "https://global.wildberries.ru/product/331866-kuler-dlya-vody-detskij-interaktivnaya-igrushka-177850419?option=294457917",
  },
];

const GiftsUI = () => {
  return (
    <div className="gifts">
      <div className="gifts__title">Таааксс. И что же вам мне подарить*</div>
      <div className="gifts__list">
        {CONFIG.map(({ title, link }) => {
          return (
            <div key={title} className="gift">
              {/* <div
                className="gift__title"
                dangerouslySetInnerHTML={{ __html: title }}
              /> */}
              {link ? (
                <a
                  href={link}
                  className="gift__link"
                  target="_black"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></a>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="gifts__note">
        * Если что то забронировали, из подарка, дайте моим владельцам знать
      </div>
    </div>
  );
};

export default GiftsUI;
