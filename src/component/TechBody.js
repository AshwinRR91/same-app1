import React, {useState, useEffect} from 'react';
import FormCom from './FormCom'; 



const TechBody = () =>{

    const [phones, setPhones] = useState([]);
    const getPhones = async()=>{
        const resp = await fetch("http://localhost:8080/mobilePhones")
        const rone = await resp.json()
        const zone = rone["_embedded"]
        const phone = zone["mobilePhones"]
        console.log(phone)
        setPhones(phone)
        console.log(typeof(phone))
        return phone
    }

    useEffect(()=>{
        getPhones();
        },[])
        return(
        <div>
            
            {
            phones.map((phone, index) => {
                const {companyName, priceInRs, model, imageURL} = phone
                console.log(companyName)
                return (
                <div className = "card" key = {index}>
                    <img src={imageURL} alt="Avatar" style={{width:"100%"}}></img>
                    <div className="container">
                        <p>Company : {companyName}</p> 
                        <p>Model: {model}</p>
                        <p>Price : {priceInRs}</p>
                    </div>
                </div>
                );
            })  
            }
        </div>
        )
    }


export default TechBody;
