import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import logo from '../assets/react.svg';
import { routes } from "./routes";
import { Suspense } from "react";


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
        <div className="main-layout">
            <nav>
                <NavLink to="/home">
                    <img src={ logo } alt="React Logo" />
                </NavLink>
                <ul>
                    {
                        routes.map( route => (
                            <li key={ route.to }>
                                <NavLink 
                                    to={ route.to } 
                                    className={ ({ isActive }) => isActive ? 'nav-active' : ''}>
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            <Outlet />
        </div>
    </Suspense>
  )
}
//* isActive es un valor booleano que viene en el navLink y se puede usar con un ternario

//? Suspense 
//* sirve para decirle a React que cuando yo estoy cargando algun modulo o componente que espere,
//* pero mienytras estoy cargando has lo siguinete.