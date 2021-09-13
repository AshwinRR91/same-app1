import React, {useS} from 'react';

const Nav = ({page}) =>{
    const setShowPage = (name)=>{
            page(name)
        }
    return (
        <nav>
            <div className = "navcenter"> 
            <div id = "chloe">
                TechSpec
            </div>
            <ul>
                <li><a href = "#" onClick = {() =>setShowPage("Mobile")}>Mobile</a></li>
                <li><a href = "#">Laptop</a></li>
                <li><a href = "#">Cars</a></li>
                <li><a href = "#">Drone</a></li>
            </ul>
            </div>
        </nav>
    )
}


export default Nav;
