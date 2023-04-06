import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.jpg"
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id, isFav, filterByFavs = false }) => {

  const [isFavorite, setIsFavorite] = useState(isFav);
  const { dispatch } = useContext(ContextGlobal)

  const toggleFavorite = (name, username, id) => {
    dispatch({ type: "updateFav", dentist: { name, username, id} })
    setIsFavorite(!isFavorite);
  };

  const showCard = isFavorite || !filterByFavs

  return showCard && (
    <div className="card">
      <Link to={`/detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={doctor} alt={name} width="100%" />
        <h3>{name}</h3>
        <p>id: {id}, username: {username}</p>
        {
          <button onClick={(e) => {
            e.preventDefault();
            toggleFavorite(name, username, id)
          }} className={`like-button ${ isFavorite ? 'liked' : ''}`}></button>
        }
      </Link>
    </div>
  );
};

export default Card;
