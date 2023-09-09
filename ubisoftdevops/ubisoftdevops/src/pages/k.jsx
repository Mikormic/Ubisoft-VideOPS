import { Link } from 'react-router-dom';
import kk from "../screen/Screenshot 2023-09-09 120127.png";

export const K = () => {
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
  <p>Meilleur score</p>
                <Link to={`/13k-2023`}><button className="btn btn-success">Play NOW !</button></Link>
                </div>
              </div>
            </div>
      </div>
    );
  };