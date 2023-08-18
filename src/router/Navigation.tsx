import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (

    <div className="main-layout">
            <nav>
            <NavLink to="/home">
                <img src={ logo } alt="React Logo" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}
//* isActive es un valor booleano que viene en el navLink y se puede usar con un ternario

