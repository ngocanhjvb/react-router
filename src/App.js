import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFound from "./component/NotFound";
import Menu from "./component/Menu";
import routers from "./routers";
import Hook from "./component/Hook";


function showContentMenus(routers) {
    let result = null;
    if (routers.length > 0) {
            result = routers.map((route,index) =>{
                return(
                    <Route key={index} exact={route.exact} path={route.path}>
                        {route.main}
                    </Route>
                )
            })
    }
    return result
}


function App() {
    return (
        <Router>
            <Hook/>
            <Menu/>
            <Switch>
                {showContentMenus(routers)}
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
