import React from "react";
import "./Searchbox.css";

const Searchbox = ({ searchChange }) => {
    return (
        <div className="container">
            <input
                className="search"
                type="search"
                placeholder="Search your starwars character..." 
                onChange={searchChange}  
            />
        </div>
    );
}

export default Searchbox;
