import express, { json, urlencoded } from "express";
import cors from "cors";
import connectToDatabase from "./db-connection.js";


const app = express();

//accept json & cors
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//routes

app.get("/", (req, res) => {
    res.send("Hello World!");
    const connection = connectToDatabase();
    connection.connect()

    connection.query('SELECT * FROM games;', (err, rows, fields) => {
        if (err) throw err

        console.log(rows)
    })

    connection.end()
});
//get highscores
app.get("/highscores", (req, res) => {
    const connection = connectToDatabase();
    const { game } = req.query;
    connection.connect()
    connection.query(`SELECT * FROM highscores WHERE game_id=${game} ORDER BY score DESC;`, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
    })
    connection.end()
});
//add a score
app.post("/highscores", (req, res) => {
    const { name, score, game } = req.body;
    console.log(req.body);
    if (name === undefined) {
        name = "Anonymous";
    }
    console.log(name, score);
    const connection = connectToDatabase();
    connection.connect()
    connection.query(`INSERT INTO highscores (name, score, game_id) VALUES ('${name}', ${score}, ${game})`, (err, rows, fields) => {
        if (err) throw err
    })
    connection.query(`SELECT * FROM highscores WHERE game_id=${game} ORDER BY score DESC`, (err, rows, fields) => {
        if (err) throw err
        Array.isArray(rows) && rows.forEach((row) => {
            console.log(`${row.name} has a score of ${row.score}`);
        });
        res.status(200).json(rows);
    })
    connection.end()
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});