import React from 'react'
import { useTheme } from './ThemeContext'
export default function About() {
    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <h1 style={themeStyles}>About</h1>
        </>
    )
}