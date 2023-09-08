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

    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err) throw err

        console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
});

app.post("/highscore", (req, res) => {
    const { name, score, game } = req.body;
    console.log(name, score);
    const connection = connectToDatabase();
    connection.connect()
    connection.query(`INSERT INTO highscores (name, score) VALUES ('${name}', ${score})`, (err, rows, fields) => {
        if (err) throw err
        console.log(rows);
    })
    connection.end()
    res.send("Highscore added!");
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});