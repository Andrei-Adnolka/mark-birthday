import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  { title: `${ICON} Мольберт для рисования с грифельной доской` },
  {
    title: `${ICON} Стол и стульчик (белого или бежевого цвета)`,
    link: "https://www.wildberries.ru/catalog/84890031/detail.aspx?targetUrl=MS&size=138661201",
  },
  { title: `${ICON} Башня помощница` },
  { title: `${ICON} Бизиборд` },
  { title: `${ICON} Набор Пиклера (треугольник и горка)` },
  { title: `${ICON} Бассейн с шариками (постельных тонов)` },
  {
    title: `${ICON} Набор книжек 1`,
    link: "https://www.wildberries.ru/catalog/42519542/detail.aspx?targetUrl=GP&size=85024832",
  },
  {
    title: `${ICON} Набор книжек 2`,
    link: "https://www.wildberries.ru/catalog/117786531/detail.aspx?targetUrl=GP&size=209796688",
  },
  {
    title: `${ICON} Игрушка каталка`,
    link: "https://www.wildberries.ru/catalog/27771460/detail.aspx?targetUrl=GP&size=63227223",
  },
  { title: `${ICON} Сертификат в магазин "Детский мир"` },
  { title: `${ICON} Сертификат в магазин "Zara"` },
];

const GiftsUI = () => {
  return (
    <div className="gifts">
      <div className="gifts__title">Таааксс. И что же вам мне подарить*</div>
      <div className="gifts__list">
        {CONFIG.map(({ title, link }) => {
          return (
            <div key={title} className="gift">
              <div className="gift__title">{title}</div>
              {link ? (
                <a href={link} className="gift__link">
                  ☞ Тык
                </a>
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
