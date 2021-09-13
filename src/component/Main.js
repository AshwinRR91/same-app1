import React, {useState} from 'react';
import Nav from './Nav'
import TechBody from './TechBody'



const Main = () =>{
 const [page,setPage] = useState("");


    return (
       <div> 
            <Nav page = {setPage}/>
            <TechBody page = {page}/>
        </div>

    )
}

export default Main;
