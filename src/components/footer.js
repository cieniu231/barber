import React from "react";
import {useTheme} from "./ThemeContext";
export default function Footer() {

    const darkTheme=useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
    }

    return(
        <div style={themeStyles} className="footer">
            <p>Copyright by cieniu231</p>
        </div>
    )
}