import { createContext, useMemo, useState } from "react";

export const initialState = { theme: "light", favoritos: [] }

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState.theme)
  const [favoritos, setFavoritos] = useState(initialState.favoritos)

  const data = useMemo(() => {
    const getDentists = async () => {
      const dataFetch = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json()
        })
      return dataFetch
    }
    return { getDentists, theme, favoritos, setTheme, setFavoritos }
  }, [theme, favoritos])

  return (
    <ContextGlobal.Provider value={{ ...data }}>
      {children}
    </ContextGlobal.Provider>
  );
};
