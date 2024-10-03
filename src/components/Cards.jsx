
import { Link } from 'react-router-dom';
import Housings from "../Data/logements.json";

const Cards = () => {
  return (
    Housings.map((housing) => (
      <Link to={`/Housing/${housing.id}`} className="cards" key={housing.id}>
        <img src={housing.cover} alt={housing.title} />
        <h3>{housing.title}</h3>
      </Link>
    ))
  );
};



export default Cards;