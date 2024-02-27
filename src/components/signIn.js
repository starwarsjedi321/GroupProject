import '../styles/form.css';
import React, { useState } from 'react';
import Properties from '../database/Properties.json';



export default function(props){

    // setting functions to store data inputted in form

    // const [email, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [telephone, setTelephone] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        
        // Gathering length of buyers data to populate ID number
        let buyerslist = Properties.buyers;
        let buyerlength = buyerslist.length;
        let id = buyerlength + 1;
        

        // Create the object from the form input data

        let dataItem = {
            ID: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            telephone: telephone
        }

        // sending new buyer details to be stored in database

        fetch("http://localhost:3000/buyers", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataItem)
        })
    }

    return (
        // creating actual form
        <form id="form1">
            <fieldset className="wrapper">
                
                    <legend className="title">Sign in</legend>
                    <br></br>
                    <b className='labels'>Email or Username</b>
                    <input className='fields' type='text'  name='email'  required="required"></input>
                    <br/>
                    
                    <b className='labels'>Password</b>
                    <input className='fields' type='password' name='lastName' required="required"></input>
                    <br />
                    <button className='submit' type="submit" form="form1">Sign in</button>
                
            </fieldset>
        </form>
    );
};