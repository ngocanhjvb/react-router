import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

function MenuLink({label, to, activeOnlyWhenExact}) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    let active = match ? 'active' : "";
    return (
        <li className={`my-link ${active}`}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </li>
    );
}


const menus = [
    {
        name: 'Home',
        path: '/',
        exact: true
    },
    {
        name: 'About',
        path: '/about',
        exact: false
    },
    {
        name: 'Contact',
        path: '/contact',
        exact: false
    },
    {
        name: 'Sản phẩm',
        path: '/products',
        exact: false
    }
]


const showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuLink key={index} to={menu.path} label={menu.name} activeOnlyWhenExact={menu.exact}/>
            )
        })
    }
    return result
}

function Menu() {

    return (
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                {showMenus(menus)}
            </ul>
        </nav>
    );
}

export default Menu;
