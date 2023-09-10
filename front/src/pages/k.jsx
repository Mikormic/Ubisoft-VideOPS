import { Link } from 'react-router-dom';
import kk from "../screen/Screenshot 2023-09-09 120127.png";
import { useEffect, useState } from 'react';

export const K = () => {

  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/highscores?game=3')
    .then(response => response.json())
    .then(data => setHighscores(data));
  }, []);


    return (
      <div className="shop">
        <nav>
        <Link to={`/`}><h1>PROJET UBISOFT</h1></Link>
      </nav>
           <div className="card w-96 glass">
              <h2>13K 2023</h2>
              <figure>
                <img
                  src={kk}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                <p>description</p>
                <p>Meilleurs scores:</p>
                    <ol>
                      {highscores.slice(0,5).map((highscore) => (
                        <li key={highscore.id}>{highscore.name} : {highscore.score}</li>
                      ))}
                    </ol>
                <Link to={"http://localhost:4244"}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
      </div>
    );
  };