import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { getFavs } = useContext(ContextGlobal)
  const favoritos = getFavs()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {Object.keys(favoritos).map((id)=>{
          return(
            <Card 
              key={id} 
              name={favoritos[id].name} 
              username={favoritos[id].username} 
              id={id} 
              isFav={ id in favoritos } 
              filterByFavs={ true } 
            />
          )
        })}
      </div>
    </>
  );
};

export default Favs;
