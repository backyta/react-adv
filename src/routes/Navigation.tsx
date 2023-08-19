import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import logo from '../react.svg';

export const Navigation = () => {
  return (

    <div className="main-layout">
            <nav>
            <NavLink to="/home">
                <img src={ logo } alt="React Logo" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

//* isActive es un valor booleano que viene en el navLink y se puede usar con un ternario

