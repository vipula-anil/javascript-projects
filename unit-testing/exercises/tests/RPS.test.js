const whoWon = require("../RPS.js");

describe("wonWon", function () {
  test("returns 'Tie' if P1 = rock & P2 = rock", function () {
    let output = whoWon("rock", "rock");
    expect(output).toBe("TIE!");
  });

  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Not a play' if P1 = Hi & P2 = OK", function () {
    let output = whoWon("Hi", "OK");
    expect(output).toBe("Not a play");
  });
});
