import "react-image-gallery/styles/scss/image-gallery.scss";
import logo from "./photos/main.jpg";

import MapUI from "./components/map";
import ClothesInfo from "./components/clothes";
import Gifts from "./components/gifts";
import SliderUI from "./components/slider";

import "./App.scss";
import { TimerUI } from "./components/timer";

function App() {
  return (
    <div className="layout">
      <div className="main">
        <div
          className="main__image"
          style={{ backgroundImage: `url("${logo}")` }}
        />
        <span
          className="main--title"
          dangerouslySetInnerHTML={{
            __html: "Так Ты! Да, Ты! <br/>Мне скоро 2 <br/>и я жду тебя!",
          }}
        />
      </div>
      <div className="invite">
        <span>Осталсось: </span>
        <TimerUI />
        Хотел бы пригласить вас провести этот праздник со мной
      </div>
      <MapUI />
      <Gifts />
      <ClothesInfo />
      <SliderUI />
      <div className="thanks_block">Уже жду вас! Всех люблю</div>
    </div>
  );
}

export default App;
