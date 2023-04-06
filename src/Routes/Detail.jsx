import React, { useEffect, useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { state } = useContext(ContextGlobal)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [singleDentist, setSingleDentist] = useState({})
  const paramsForDentist = useParams()

  const getSingleDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + paramsForDentist.id)
      .then((response) => {
        return response.json()
      })
    setSingleDentist(data)
  }

  useEffect(() => {
    getSingleDentists()
  }, [])

  return (
    <main className={state.theme}>
      <h1>Datos Dentista {singleDentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr> 
          <td>{singleDentist.name}</td>
          <td>{singleDentist.email}</td>
          <td>{singleDentist.phone}</td>
          <td>{singleDentist.website}</td>
        </tr>
      </table>
    
    </main>
  )
}

export default Detail