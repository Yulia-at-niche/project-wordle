import React from "react";
/**
 * This is not a great pattern. It's too specific to a binary of
 * very specific banners. It's not very flexible or reusable.
 * React is all about reusability and flexibility of components.
 *
 * The course solution has props for status and children.
 */
function Banner({ isGameWon }) {
  //This function checks if the game is over or not in addition to if the game was won or lost.
  //This function returns the data we need for the markup
  const gameResults = isGameWon();

  const cssClass = gameResults.won ? "happy banner" : "sad banner";
  const message = gameResults.won ? (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {" "}
        {gameResults.numOfGuesses === 1
          ? "1 guess"
          : `${gameResults.numOfGuesses} guesses`}
      </strong>
      .
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{gameResults.answer}</strong>.
    </p>
  );

  return <div className={cssClass}>{message}</div>;
}

export default Banner;
