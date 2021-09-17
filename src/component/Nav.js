import React, {useS} from 'react';
import { Link } from 'react-router-dom';
const Nav = () =>{
    
    return (
        //<a href = "#" onClick = {() =>setShowPage("Mobile")}>Mobile</a>
        <nav>
            <div className = "navcenter"> 
            <div id = "chloe">
                TechSpec
            </div>
            <ul>
                <li>
                    <Link to = "/mobile">Mobile</Link>
                </li>
                <li><a href = "#">Laptop</a></li>
                <li><a href = "#">Cars</a></li>
                <li><a href = "#">Drone</a></li>
                <li>
                    <Link to = "/add">Add Tech</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}


export default Nav;
