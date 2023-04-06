import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { getFavs, state } = useContext(ContextGlobal)
  const favoritos = getFavs()

  return (
    <main className={state.theme}>
      <h1>Dentista Favorito</h1>
      <div className={`card-grid ${state.theme}`}>
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
    </main>
  );
};

export default Favs;
