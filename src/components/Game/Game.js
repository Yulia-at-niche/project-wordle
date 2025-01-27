import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "~src/components/GuessInput";
import GuessHistory from "~src/components/GuessHistory";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "~src/constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const lastGuess = guessHistory[guessHistory.length - 1];
  const turnsTaken = guessHistory.length;

  function updateGuessHistory(newGuess) {
    //copy the array and add the new guess so as not to mutate state
    const nextGuesses = [...guessHistory, newGuess];
    setGuessHistory(nextGuesses);
  }

  /**
   * Kinda sucks that we're repeating the logic of checking if the game is over based on win or lose in multiple places.
   */
  function isGameOver() {
    //These conditions being true mean the game has been lost
    const lost = turnsTaken >= NUM_OF_GUESSES_ALLOWED && lastGuess !== answer;
    //These conditions being true mean the game has been won
    const won = lastGuess === answer && turnsTaken <= NUM_OF_GUESSES_ALLOWED;
    //If either of these conditions are true, the game is over
    return lost || won;
  }

  function isGameWon() {
    if (!isGameOver()) {
      return;
    }
    if (lastGuess === answer) {
      return "won";
    } else {
      return "lost";
    }
  }

  return (
    <>
      <GuessHistory guessHistory={guessHistory} answer={answer} />
      <GuessInput
        updateGuessHistory={updateGuessHistory}
        isGameOver={isGameOver}
      />
      {/** I'm checking the game's state as a binary unlike the course solution which has 3 states */}
      {/* {isGameOver() && <Banner isGameWon={isGameWon} />} */}
      {isGameWon() === "won" && <WonBanner numOfGuesses={turnsTaken} />}
      {isGameWon() === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
