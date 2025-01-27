import React from "react";
import { range } from "~/src/utils";
import { WORD_LENGTH } from "~/src/constants";
import { checkGuess } from "~/src/game-helpers";

function Guess({ word, answer }) {
  const mappingArray = word ? checkGuess(word, answer) : range(WORD_LENGTH);

  return (
    <p className="guess">
      {mappingArray.map((item, iteration) => (
        <span
          className={item.status ? `cell ${item.status}` : "cell"}
          key={iteration}
        >
          {word ? item.letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
