import { getByPlaceholderText } from '@testing-library/dom';
import React, {useState, useEffect} from 'react';

const FormCom = () => {

    const[companyName, setCompanyName] = useState('');
    const[priceInRs, setPriceInRs] = useState('');
    const[model, setModel] = useState(''); 
    const[imageURL, setImageURL] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        const mobile = {
            companyName : companyName,
            priceInRs : parseInt(priceInRs),
            model : model,
            imageURL: imageURL
        };
        (async() => {
            const checkData = await fetch("http://localhost:8080/mobilePhones",
            {
               method : 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                body: JSON.stringify(mobile)

            
            });

        })();
    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <label>Company Name :</label>
            <input name = "companyName" value = {companyName} onChange = {(e)=>setCompanyName(e.target.value)}></input>
            <br></br>
            <label>Model :</label>
            <input name = "model" value = {model} onChange = {(e)=>setModel(e.target.value)}></input>
            <br></br>
            <label>Price :</label>
            <input name = "priceInRs" value = {priceInRs} onChange = {(e)=>setPriceInRs(e.target.value)}></input>
            <br></br>
            <label>Image URL :</label>
            <input name = "imageURL" value = {imageURL} onChange = {(e)=>setImageURL(e.target.value)}></input>
            <button type = "submit">Submit</button>
        </form>
    )

}

export default FormCom;