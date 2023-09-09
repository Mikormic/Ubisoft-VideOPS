import { Link } from 'react-router-dom';
import behind from "../screen/newplayer.png";

export const Behind = () => {
    return (
      <div className="shop">
        <nav>
        <Link to={`/`}><h1>PROJET UBISOFT</h1></Link>
      </nav>
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
                    <p>description</p>
                    <p>Meilleur score</p>
                <Link to={'le lien docker'}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
      </div>
    );
  };