import Player from "./src/Player.js";
import Game from "./src/Game.js";

// import { PI, add } from "./src/module";
// import { PI } from "../src/module"; // export { PI, add };
// import PI from "../src/module"; // export default PI;
// import { greet } from "../src/greeting";

// greet("Hello, World");

// Create two players
const player1 = new Player("Alice", 100, 10);
const player2 = new Player("Bob", 120, 8);

// Create a new game
const game = new Game(player1, player2);

// Start the game
game.start();
