import React from "react";
import Guess from "~src/components/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "~src/constants";
import { range } from "~src/utils";

function GuessHistory({ guessHistory, answer }) {
  return (
    <div className="guess-results">
      <>
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} word={guessHistory[index]} answer={answer} />
        ))}
      </>
    </div>
  );
}

export default GuessHistory;
