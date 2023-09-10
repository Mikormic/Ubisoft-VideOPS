import behind from "../screen/newplayer.png";
import whitespace from "../screen/Screenshot 2023-09-09 120100.png";
import kk from "../screen/Screenshot 2023-09-09 120127.png";
import { Link } from 'react-router-dom';

export const Accueil = () => {
  return (
    <div className="shop">
      <nav>
        <h1>PROJET UBISOFT</h1>
      </nav>
      <main>
        <div className="games">
          <div className="game1">
            <div className="card w-96 glass">
              <h2>BEHIND ASTEROIDS</h2>
              <figure>
                <img
                  src={behind}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                <Link to={`/Behind-Asteroids`}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="game2">
            <div className="card w-96 glass">
              <h2>WHITE SPACE</h2>
              <figure>
                <img
                  src={whitespace}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                <Link to={`/White-Space`}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="game3">
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
                <Link to={`/13k-2023`}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
