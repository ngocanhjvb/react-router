import React from 'react';
import Product from "./Product";
import {NavLink, Route, useRouteMatch} from "react-router-dom";


function Products(props) {

    let products = [
        {
            id: 1,
            name: 'IPHONE 10',
            slug: 'iphone-10',
            price: 12000
        },
        {
            id: 2,
            name: 'SAMSUNG S20',
            slug: 'samsung-s20',
            price: 18000
        },
        {
            id: 3,
            name: 'OPPO F1S',
            slug: 'oppo-f1s',
            price: 10000
        }
    ]
    let {url} = useRouteMatch();
    console.log(props.location)


    var result = products.map((product, index) => {
        return (
            <li className="list-group-item" key={index}>
                <NavLink to={`${url}/${product.slug}`}>{product.name} - {product.price}</NavLink>
            </li>
        )
    })
    return (
        <div className="container-fluid">
            <h1>List Products</h1>
            <div className="row">
                <ul className="list-group">
                    {result}
                    <li className="list-group-item">
                        <NavLink to={{
                            pathname:`${url}/something`,
                            state:{
                                redirect:true
                            }
                        }}>Some thing need to be redirected</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Route path="/products/:slug" component={Product}/>

            </div>
        </div>
    )

}

export default Products;
