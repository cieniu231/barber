import React, { useState } from 'react';
import {useTheme} from "./ThemeContext";
import  useFetch  from '../useFetch'
import PriceList from './pricelist'



export default function Prices() {

    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
        minHeight: '77vh'
    }

    const [currentId, setCurrentId] = useState("1");
    const {data: prices, isLoading, error} = useFetch("http://localhost:8000/prices/"+currentId);
    const handleDataChange = (e, _isLoading) => {
        setCurrentId(e.target.value);
    }




    return(
        <div style={themeStyles}>
            <select onChange={handleDataChange} value={currentId}>
                <option value="1">Kamil (Master  Barber)</option>
                <option value="2">Sebastian (Barber)</option>
            </select>

            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {!isLoading && prices && <PriceList prices={prices} title={"All Blogs!"} />}

        </div>
    )

}