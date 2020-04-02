import React from "react";
import "./Hangman.css";

const AlphaButtons = props => (
  <p className="Hangman-btns guesses">
    {"abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={props.handleGuess}
        disabled={props.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ))}
  </p>
);

export default AlphaButtons;
