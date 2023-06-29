import React, {useRef, useState} from 'react';
import {useTheme} from "./ThemeContext";



export default function Prices() {

    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    const [state, setState] = useState({
        text: "Wpisz rok",
    });

    const number = useRef("");

    const handleDateChange = (e) => {
        const value = number.current.value;
        console.log(value);
        fetch(`http://numbersapi.com/${value}/year?json`)
            .then(res => {
                if(res.ok){
                    return res
                }
                throw Error(res.status)
            })
            .then(res => res.json())
            .then(data => setState(prevState => {
                return { ...prevState, text: data.text }
            }))
            .catch(err => setState(() => {
                return { text: "Wpisz rok " }
            }))

    }

    return(
        <>
            <input onChange={handleDateChange} type="text" ref={number}/>
            <p>Odpowiedź: {state.text} </p>
        </>
    )

}