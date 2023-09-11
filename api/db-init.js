import mysql from 'mysql';



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'devops',
})


connection.connect();

connection.query('DROP TABLE IF EXISTS highscores;', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
})

connection.query('DROP TABLE IF EXISTS games;', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
})

connection.query('CREATE TABLE games (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
})

connection.query('CREATE TABLE highscores (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, score INT UNSIGNED, game_id INT UNSIGNED, FOREIGN KEY (game_id) REFERENCES games(id));', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
})

connection.query('ALTER TABLE highscores ADD name VARCHAR(10) default "Anonymous";', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
})

connection.query('INSERT INTO games (name) VALUES ("Behind Asteroids"), ("Keep white space"), ("Js13k");', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
}
)

connection.query('INSERT INTO highscores (score, game_id) VALUES (100, 1), (200, 1), (300, 1), (100, 2), (200, 2), (300, 2), (100,3), (200, 3), (300,3);', (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
}
)

connection.end()