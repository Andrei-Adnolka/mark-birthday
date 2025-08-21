import JSConfetti from "js-confetti";
import React, { useCallback } from "react";

import Hero from "./components/new/hero";
import Bento from "./components/new/bento-wrapper";

import "./App.scss";

function App() {
  const [confetti] = React.useState(() => new JSConfetti());

  const fire = useCallback(() => {
    confetti.addConfetti({
      emojis: ["🎉", "🎂", "✨"],
    });
  }, [confetti]);
  return (
    <div className="layout">
      <Hero fire={fire} />
      <div style={{ height: "40px", width: "100%" }} />
      <Bento />
      <div className="thanks_block">Уже жду вас! Всех люблю</div>
    </div>
  );
}

export default App;
