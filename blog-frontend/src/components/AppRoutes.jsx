import React from "react";
import {Route, Routes} from "react-router-dom";
import PostList from "../features/posts/PostList.jsx";
import PostDetails from "../features/posts/PostDetails.jsx";
import NewPostForm from "../features/posts/NewPostForm.jsx";
function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<PostList/>}/>
            <Route path="posts/:id" element={<PostDetails/>}/>
            <Route path="/new" element={<NewPostForm/>}/>
        </Routes>
    )
}
export default AppRoutes