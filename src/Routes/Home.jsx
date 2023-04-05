import React, { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentist, setDentist] = useState([])
  const { getFavs } = useContext(ContextGlobal)

  const getDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
    setDentist(data)
  }

  const favoritos = getFavs()

  useEffect(() => {
    getDentists()
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map((dentist) => {
          return (<Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username} isFav={ dentist.id in favoritos } />)
        })}
      </div>
    </main>
  )
}

export default Home;