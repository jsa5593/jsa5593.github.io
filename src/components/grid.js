import React from "react";
import "../styles/grid.css"

const Grid = () => {
    return (
        <div>
            <ul className="navigation">
                <li><a href="#what">What is?</a></li>
                <li><a href="#why">Why is?</a></li>
                <li><a href="#from">Where from?</a></li>
                <li><a href="#where">Where is?</a></li>
                <li><a href="#here">Here is?</a></li>
            </ul>
        </div>
    );
}

export default Grid