import React from 'react';
import {Redirect, useLocation, useParams} from "react-router-dom";


function Product(props) {
    let {match, location} = props
    console.log(match)
    console.log(location)
    let {slug} = useParams()
    let {state} = useLocation()
    console.log(state)
    if (state && state.redirect) {
        return (
            <Redirect to={{
                pathname: '/'
            }}/>
        )
    }


    return (
        <div className="container-fluid">
            <h1>Product Name {slug}</h1>

        </div>
    )
}

export default Product;
