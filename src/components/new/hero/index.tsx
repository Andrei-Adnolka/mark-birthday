import AnimatedWrapper from "../Ui/animation";
import Button from "../Ui/button/button";
import Confetti from "./confetti";
import "./style.scss";

type Props = {
  fire: () => void;
};

export default function Hero({ fire }: Props) {
  return (
    <section className="hero">
      <Confetti />
      <AnimatedWrapper>
        <h1>Happy Birthday, Mark! 🦖🦖🦖</h1>
        <p>9 сентября — день, когда мир стал ярче.</p>
        <Button onClick={fire}>Жмяк</Button>
      </AnimatedWrapper>
    </section>
  );
}
