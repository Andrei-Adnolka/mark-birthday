import { useEffect } from "react";
import jsConfetti from "js-confetti";

import "./style.scss";

function useConfetti() {
  useEffect(() => {
    const c = new jsConfetti();
    c.addConfetti({ emojis: ["🎉", "🎂", "✨"] });
    return () => c.destroyCanvas();
  }, []);
}

export default function Confetti() {
  useConfetti();
  return <div className="canvas" aria-hidden />;
}
