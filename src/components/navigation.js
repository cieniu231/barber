import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles.css";
import {useTheme, useThemeUpdate} from "./ThemeContext";

export default function Navbar() {

    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
    }
    const toggleTheme = useThemeUpdate()

    return(
        <>
            <nav className="nav" style={themeStyles}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Link to="/about" className="site-title">
                    Site Name
                </Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/reservation">Reservation</CustomLink>
                <CustomLink to="/prices">Prices</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
            </ul>
            </nav>
        </>

    )

    function CustomLink({ to, children, ...props}) {
        const resolvedPath =  useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }
}