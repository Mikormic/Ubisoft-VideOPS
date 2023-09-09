import { Link } from 'react-router-dom';
import whitespace from "../screen/Screenshot 2023-09-09 120100.png";

export const WhiteSpace = () => {
    return (
      <div className="shop">
        <nav>
        <Link to={`/`}><h1>PROJET UBISOFT</h1></Link>
      </nav>
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
                <p>description</p>
                    <p>Meilleur score</p>
                <Link to={`/White-Space`}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
      </div>
    );
  };