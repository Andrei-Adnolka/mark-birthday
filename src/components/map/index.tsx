import car from "../../photos/misha.png";
import "./style.scss";

const MapUI = ({ className }: { className: string }) => {
  return (
    <div className={`wrapper ${className}`}>
      <div className="map_container">
        <div className="gifts__title">Маршрут построен</div>
        <iframe
          className="map_wrapper"
          title="yandex-map"
          src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Acb5899d6e1549bfa11cb1b1765a95b6ddd14b4fd014e5630a96191f84406ba2b"
        />

        <div
          className="map_text"
          dangerouslySetInnerHTML={{
            __html: `Дата: 13.09.25 <br/>
                  Время: 17:00 <br/>
                  <a href='https://verhom.by/' target="_blank">
                    Конная усадьба Буцевичи
                    <img src='https://verhom.by/sites/default/files/logo.png' alt="logo"/>
                  </a> <br/>
                          <a href="https://g.co/kgs/2dav7qf" target="_blank" rel="noreferrer">
          Тыкни сюдя и построиться маршрут
        </a>`,
          }}
        />
        <img className="map_car" src={car} alt="car" />
      </div>
      {/* </YMaps> */}
    </div>
  );
};

export default MapUI;
