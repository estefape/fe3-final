import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.jpg"

const Card = ({ name, username, id, isFav, filterByFavs = false }) => {

  const [isFavorite, setIsFavorite] = useState(isFav);

  const toggleFavorite = (name, username, id) => {
    if (isFavorite) {
      removeFav(id)
    } else {
      addFav(name, username, id)
    }
    setIsFavorite(!isFavorite);
  };

  const getFavsFromLocalStorage = () => {
    const favs = localStorage.getItem('favoritesDentists');
    if (favs) {
      return JSON.parse(favs)
    }

    return {}
  }

  const saveFavsToLocalStorage = (favoritos) => {
    localStorage.setItem('favoritesDentists', JSON.stringify(favoritos))
  }

  const addFav = (dentistName, dentistUserName, dentistId) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    let favoritos = getFavsFromLocalStorage()
    favoritos[dentistId] = { name: dentistName, username: dentistUserName };
    saveFavsToLocalStorage(favoritos)
  }

  const removeFav = (id) => {
    let favoritos = getFavsFromLocalStorage();
    delete favoritos[id];
    saveFavsToLocalStorage(favoritos)
  }

  const showCard = isFavorite || !filterByFavs

  return showCard && (
    <div className="card">
      <Link to={`/detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={doctor} alt={name} width="150px" />
        <h1>
          {name}
        </h1>
        <h2>
          {username}
        </h2>
        <h3>
          {id}
        </h3>
        {

          <button onClick={(e) => {
            e.preventDefault();
            toggleFavorite(name, username, id)
          }} className="favButton">{isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        }
      </Link>
    </div>
  );
};

export default Card;
