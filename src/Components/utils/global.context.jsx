import { createContext, useMemo, useState, useReducer } from "react";

export const initialState = { theme: "light", favoritos: {} }

export const ContextGlobal = createContext(initialState);

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

const addFav = (name, username, id) => {
  // Aqui iria la logica para agregar la Card en el localStorage
  let favoritos = getFavsFromLocalStorage()
  favoritos[id] = { name, username };
  saveFavsToLocalStorage(favoritos)
  return favoritos
}

const removeFav = (id) => {
  let favoritos = getFavsFromLocalStorage();
  delete favoritos[id];
  saveFavsToLocalStorage(favoritos)
  return favoritos
}

export const reducer = (state, action) =>{
  switch (action.type) {
    case "changeTheme":
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      document.body.className = newTheme
      return { ...state, theme: newTheme }
    case "updateFav":
      let nuevosFavoritos
      if (action.dentist.id in state.favoritos) { 
        nuevosFavoritos = removeFav(action.dentist.id)
      } else {
        nuevosFavoritos = addFav(action.dentist.name, action.dentist.username, action.dentist.id)
      }
      return { ...state, favoritos: nuevosFavoritos }
    default:
      throw new Error("No existe el tipo de accion requerido")
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState.theme)
  const [favoritos, setFavoritos] = useState(initialState.favoritos)
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = useMemo(() => {
    
    const getDentists = async () => {
      const dataFetch = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json()
        })
      return dataFetch
    }

    const getFavs = () => {
      const favs = localStorage.getItem('favoritesDentists');
      let favoritos = {}
      if (favs) {
        favoritos = JSON.parse(favs)
      }

      return favoritos
    }


    return { getDentists, getFavs, theme, favoritos, setTheme, setFavoritos, state, dispatch }
  }, [theme, favoritos, state])
  

  return (
    <ContextGlobal.Provider value={{ ...data }}>
      {children}
    </ContextGlobal.Provider>
  );
};
