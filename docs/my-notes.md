## Exercise 1: GuessInput

1. I totally forgot to update the attributes `for` and `class` to `htmlFor` and `className` before watching the solution

## Exercise 3: guess slots

1. I made a constant for the word length and I used it when locking in the word length elsewhere. So I think I avoid the issue that the instructor brought up that having that constant makes it easily changeable. Since my min, max, and pattern all use it, the only update would be the set of words that are the puzzle answers.
2. My answer is surprisingly similar to the class's. I thought it wouldn't be because I wasn't mapping on the same thing from previous solutions.
3. Using the index for key here was also used in the course solution. In this game the boxes never move or change once set so it's fine.
4. I restructured the array not to have a uuid since we don't use it and it made the validation gnarly.

## Exercise 4: Game Logic

1. Getting the answer to the component. I thought that carrying it down from Game.js through several components wasn't the right answer so I moved the answer to the component that validates it. I was wrong this is what I should do. It's called "PROP DRILLING".

   - Turns out there was a note that this is a completely valid way of solving the problem.
   - FROM THE COURSE: So why didn't I do it this way? Well, here's the catch: it only works for immutable data. We aren't allowed to ever update or change an import. One of the stretch goals for this project is to implement a "restart" feature, where the user can start again with a brand-new word. In that case, answer changes over time, and so we can't rely on import/export.

2. CSS class came out as the string `undefined` instead of just not rendering any word. Had to fix that. I didn't notice this ahead of time
3. He solved it by extracting a lot of inline logic into it's own component and then called that inside the range map.

## Exercise 5: Winning and Losing

1. The course solution made a new state for the game status of "won, lost, running". I didn't do that. I made two new functions to determine if the game was over and if it was won.
2. THe
