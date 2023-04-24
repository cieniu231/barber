import React from "react";

export default function Navigation {
    return(
        <nav>
            <ul>
                <li onClick={setPage("About")} title="About">About us</li>
                <li onClick={() => setPage}>Prices</li>
                <li onClick={() => setPage}>Reservation</li>
                <li onClick={() => setPage}>Contact us</li>
                <li onClick={() => setPage}>Crew</li>
            </ul>
        </nav>
    )
}