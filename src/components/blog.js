import React from 'react';
import BlogList from "./bloglist";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";
import {useTheme} from "./ThemeContext";

export default function Blog() {
    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
    }
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div style={themeStyles}>
            <button><Link to="/newblog">Create</Link></button>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs!"}  />}
        </div>
    )
}