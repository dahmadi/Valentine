import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm sensitive",
  "Jail"
];

const firstImg =
  "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
const secondImg =
  "https://media.tenor.com/BvCZOhtPrLgAAAAi/milk-and-mocha-milk-and-mocha-bear.gif";

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    fontFamily: "'Edu NSW ACT Cursive', cursive",
    position: "relative",
    zIndex: 1
  };

  const yesStyle = {
    fontSize: `${yesButtonSize}px`,
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "transform 0.2s ease"
  };

  const noStyle = {
    fontSize: "16px",
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit"
  };

  const handleYes = () => {
    setIsValentine(true);

    // Confetti explosion
    if (window.confetti) {
      window.confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const no
