CREATE TABLE games (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE highscores (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  score INT UNSIGNED,
  game_id INT UNSIGNED,
  FOREIGN KEY (game_id) REFERENCES games(id)
);


INSERT INTO games (name) VALUES ("Behind Asteroids", "Keep white space", "Js13k");

INSERT INTO highscores (score, game_id) VALUES (100, 1);

SELECT * FROM games;

SELECT * FROM highscores JOIN games ON highscores.game_id = games.id WHERE games.name = "Behind Asteroids";