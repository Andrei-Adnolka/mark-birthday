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
    title: `<s>${ICON} Баскетбольное кольцо</s>`,
  },
  {
    title: `<s>${ICON} Грузовик автовоз с машинкой</s>`,
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
  {
    title: `${ICON} Генератор пены Краб`,
    link: "https://www.wildberries.by/product/generator-peny-krab-230150286?option=363510361",
  },
  {
    title: `${ICON} Игрушки для ванной на присосках`,
    link: "https://www.wildberries.by/product/igrushki-dlya-vannoj-na-prisoskakh-nabor-dlya-kupaniya-malyshej-160480520?option=266778410",
  },
  {
    title: `${ICON} Набор тесто для лепки`,
    link: "https://www.wildberries.by/product/nabor-testo-dlya-lepki-202998294?option=327171412",
  },
  {
    title: `${ICON} Набор книжек с наклейками детскими`,
    link: "https://www.wildberries.by/product/nabor-knizhek-s-naklejkami-detskimi-14125659?option=42199384",
  },
  {
    title: `${ICON} Набор книжек с наклейками для детей 2`,
    link: "https://www.wildberries.by/product/nabor-knizhek-s-naklejkami-dlya-detej-14125661?option=42199386",
  },
  {
    title: `${ICON} Океанариум`,
    link: "https://www.wildberries.by/product/okeanarium-9969852?option=32653917",
  },
  {
    title: `${ICON} Пальчиковые краски`,
    link: "https://www.wildberries.by/product/palchikovye-kraski-dlya-malyshej-s-raskraskami-i-shtampami-156663853?option=261313018",
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
        * Если что то забронировали, из подарка, дайте моим владельцам знать
      </div>
    </div>
  );
};

export default GiftsUI;
