import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import logo from '../../react.svg';

export const Navigation = () => {
  return (

    <div className="main-layout">
            <nav>
            <NavLink to="/home">
                <img src={ logo } alt="React Logo" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
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

