var game = new Phaser.Game(800, 480, Phaser.CANVAS);

// Adding our main game state
game.state.add("GameState", gameState);
game.state.add("GameOverState", gameOverState);

// Start main game state
game.state.start("GameState");