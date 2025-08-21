import Gallery from "../../slider";
import MapBlock from "../../map";

import "./style.scss";

import logo from "../../../photos/main.jpg";
import { TimerUI } from "../../timer";

export default function BentoWrapper() {
  return (
    <section className="bentoGrid">
      <div style={{ position: "relative" }} className="card">
        <div
          className="main__image"
          style={{ backgroundImage: `url("${logo}")` }}
        />
        <span
          className="main--title"
          dangerouslySetInnerHTML={{ __html: "А вот и яяяя!" }}
        />
      </div>
      <MapBlock className="card" />

      <Gallery className="card" />
      <div className="invite">
        <span>До мероприятия: </span>
        <TimerUI />
      </div>
    </section>
  );
}
