// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import ('../01-lazyload/layout/LazyLayout'))
// const Lazy2 = lazy( () => import ('../01-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy( () => import ('../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout, 
        name: 'LazyLayout-Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    // {
    //     to: '/lazy-3',
    //     path: '/lazy-3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // }
]

//* con el lazy mandamos ese path para que se carge de manera perezosa

//* El componente suspense de ract sirve para decirle a React que cuando se esta cargando algun modulo
//* o componente que se espere pero mientras se esta cargando has lo siguiente.
//? Osea que muestra un mensaje de cargando u otro cuando se navega a otro componente o modulo, asi 
//? solo cargamos lo inciial en el bundle y no todo y solcitaos los chunks a medida que vamos navegando.

//* se puede colocar un cargando..  de pantalla cimpleta u otra coas.