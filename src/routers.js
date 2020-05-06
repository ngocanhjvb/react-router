import React from 'react';

import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Products from "./component/Products";

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact/>
    },
    {
        path: '/products',
        exact: false,
        main: ({match,location}) => <Products match={match} location={location}/>
    },
]

export default routers
