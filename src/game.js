export default class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  start() {
    console.log(
      `Starting game between ${this.player1.name} and ${this.player2.name}`
    );

    let round = 1;
    while (this.player1.isAlive() && this.player2.isAlive()) {
      console.log(`Round ${round}`);

      // Player 1 attacks Player 2
      this.player1.attack(this.player2);
      if (!this.player2.isAlive()) break;

      // Player 2 attacks Player 1
      this.player2.attack(this.player1);
      if (!this.player1.isAlive()) break;

      round++;
    }

    if (this.player1.isAlive()) {
      console.log(`${this.player1.name} wins!`);
    } else if (this.player2.isAlive()) {
      console.log(`${this.player2.name} wins!`);
    } else {
      console.log("It is a tie!");
    }
  }
}
