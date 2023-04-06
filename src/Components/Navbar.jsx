import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import iconoLogo from "../assets/DH.ico";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { dispatch, state } = useContext(ContextGlobal)

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='logo'>
        <img src={iconoLogo} alt='Icono Digital' />
        <span>ODonto</span>
      </div>
        <div>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/Contact">Contacto</Link>
        </div>
        <div className='theme-switcher'>
          <input type="checkbox" class="checkbox" id="checkbox" onClick={() => { dispatch({ type: 'changeTheme' }) }}/>
            <label for="checkbox" class="label">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faSun} />
              <div class='ball'/>
            </label>
        </div>
        </div>
    </nav>
  )
}

export default Navbar