import React, { useContext } from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.jpg"
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const { favoritos, setFavoritos } = useContext(ContextGlobal)  

  const addFav = (dentistName, dentistUserName, dentistId) => {
    // Aqui iria la logica para agregar la Card en el localStorage

    const currentFavs = localStorage.getItem('favoritesDentists');
    let newFavs = {}
    if (currentFavs) {
      newFavs = JSON.parse(currentFavs)
    }
    
    newFavs[dentistId] = { name: dentistName, username: dentistUserName };

    localStorage.setItem('favoritesDentists', JSON.stringify(newFavs))
  }

  return (
    <div className="card">
      <Link to={`detail/${id}`}>
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
        <button onClick={(e) => { e.preventDefault(); addFav(name, username, id) }} className="favButton">Add fav</button>
      </Link>
    </div>
  );
};

export default Card;
