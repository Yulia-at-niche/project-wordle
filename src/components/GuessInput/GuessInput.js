import React from "react";
import { WORD_LENGTH } from "~src/constants";

function GuessInput({ updateGuessHistory, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        updateGuessHistory(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isGameOver()}
        id="guess-input"
        type="text"
        required
        /**
         * Use pattern to validate that it only contains
         * letters from the alphabet. This pattern will
         * allow lower and upper case letters to be
         * entered. The pattern also enforces the max and
         * min length of the submitted input but it won't
         * prevent a user from entering more than 5 characters.
         *
         */
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        /**
         * This pops up as a helper when the wrong pattern is submitted
         */
        title="Five letters, alphabet letters only"
        /**
         * Max and min attributes are still used to limit
         * the length a user can input. Without it the
         * input will allow the user to visually enter
         * and see more than 5 characters.
         */
        maxLength={WORD_LENGTH}
        minLength={WORD_LENGTH}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
