import React, {useEffect, useState} from 'react';
import PostList from "./component/PostList";
import Pagination from "./component/Pagination";
import queryString from 'query-string';
import PostFilterForm from "./component/PostFilterForm";
import Clock from "./component/Clock";
import Button from "@material-ui/core/Button";
import ColorChange from "./component/ColorChange";
import Father from "./component/ReactMemo/Father";
import HomePage from "./page/HomePage";


//Router Hook

// function showContentMenus(routers) {
//     let result = null;
//     if (routers.length > 0) {
//         result = routers.map((route, index) => {
//             return (
//                 <Route key={index} exact={route.exact} path={route.path}>
//                     {route.main}
//                 </Route>
//             )
//         })
//     }
//     return result
// }


// Basic Hook

function App() {
    const [posts, setPosts] = useState([]);

    const [showClock, setShowClock] = useState(true)

    const [showColorChange, setShowColorChange] = useState(true)

    const [pagination, setPagination] = useState({
        _limit: 10,
        _page: 1,
    })

    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: ''
    });

    const onHandlePageChange = (page) => {
        setFilters({...filters, _page: page})
    }

    function onHandleFilterChange(formValue) {
        setFilters({
            ...filters,
            title_like: formValue.searchTerm,
            _page: 1
        })
    }

    useEffect(() => {
        const paramsString = queryString.stringify(filters);
        let url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const getPosts = async () => {
            const response = await fetch(url);
            const responseData = await response.json();
            return responseData
        }
        getPosts().then(res => {
            const {data, pagination} = res
            setPosts(data);
            setPagination(pagination)
        })

    }, [filters])


    return (
        // <Router>
        //     <Hook/>
        //     <Menu/>
        //     <Switch>
        //         {showContentMenus(routers)}
        //         <Route>
        //             <NotFound/>
        //         </Route>
        //     </Switch>
        //     <div className="mt-5">
        //         <h3 className="middle">React Hooks Basic</h3>
        //         <PostList posts={posts}/>
        //     </div>
        //     <Pagination pagination={pagination} onPageChange={onHandlePageChange}/>
        // </Router>

        <div className="mt-5">
            {/*<h3 className="middle">React Hooks Basic</h3>*/}
            {/*<div className="middle">*/}
            {/*    <Button onClick={() => setShowClock(!showClock)}>{showClock ? 'Hide' : 'Show'}</Button>*/}
            {/*    {showClock && <Clock/>}*/}
            {/*</div>*/}
            {/*<PostFilterForm onFilterChange={onHandleFilterChange}/>*/}
            {/*<PostList posts={posts}/>*/}
            {/*<Pagination pagination={pagination} onPageChange={onHandlePageChange}/>*/}
            {/*<div className="middle">*/}
            {/*    <Button onClick={() => setShowColorChange(!showColorChange)}>{showColorChange ? 'Hide' : 'Show'}</Button>*/}
            {/*    {showColorChange && <ColorChange/>}*/}
            {/*</div>*/}
            {/*<div className="middle">*/}
            {/*   <Father/>*/}
            {/*</div>*/}
            {/*<hr/>*/}
            <div className="middle">
                <HomePage/>
            </div>
        </div>
    );
}

export default App;
