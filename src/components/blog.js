import React from 'react';
import BlogList from "./bloglist";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";

export default function Blog() {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div>
            <Link to="/newblog">Create</Link>

            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs!"}  />}
        </div>
    )
}