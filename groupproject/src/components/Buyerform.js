import '../styles/form.css';
import React, { useState } from 'react';
// import Buyer from '../database/Buyer.json';



// function firstName(props){
//     return(
        
//     )
// }


// let data = {};

// let dataBind = function(){

// };

// dataBind.get = function(key){
//     let field = data;
//     key.split(".").forEach(function(item){
//         field = field[item];
//     });

//     return field;

// };


// dataBind.get = function(props){
//     document.querySelectorAll('[name]').forEach(function(props){
//         data[`${props.name}`] = `${props.value}`;
//     })
//     console.log(data);
// };


// //     for(let i=0;i=3;i++){
// //         data.firstName = `${props.value}`;
// //     }
// //     console.log(data);
// // }


// dataBind.set = function(key,value){
//     data[key] = value;
// };

// dataBind.log = function(){

// }







export default function(props){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(telephone);

        let id = Buyer.length +1;

        let dataItem = {
            ID: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            telephone: telephone
        }

        console.log(dataItem);
        // Buyer.push(dataItem);
        // console.log(Buyer);

        // var data = require('../database/Buyer.json');
        // console.log(data);

        // data.push(dataItem);
        // console.log(data);


        // console.log(dataItem);
        // console.log(Buyer);
        // let dataItemNew = new FormData();

        // dataItemNew.append( "json", JSON.stringify( dataItem ) );


        // fetch("../database/Buyer.js",
        // {
        //     method: "POST",
        //     body: dataItemNew
        // });
        // const content = await rawResponse.json();
        // .then(function(res){ return res.json(); })
        // .then(function(dataItemNew){ alert( JSON.stringify( dataItemNew ) ) })


        // fetch('../database/Buyer.json', {
        //     method: "POST",
        //     headers: {
//             'Accept': 'application/json',
                // 'Content-Type': 'application/json'
// 
// 

        fetch("", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify(dataItem)
        })
        // .then( (response) => { 
        // //do something awesome that makes the world a better place
        // });




// 
// 
//         

        //     }
        //     body: JSON.stringify(dataItem)
        // })  
        //     .then(response=> response.json())
        //     .then(data=>{
        //         console.log("hello")
        //     });


        

        // JSONFILE.push(dataItem);

    }




    return (
        <form id="form1">
            <fieldset className="wrapper">
                <legend className="title">Register As A New Buyer</legend>

                <b>First Name</b>
                <input type='text' value={firstName} name='firstName' onChange={(event => setFirstName(event.target.value))}></input>
                <br/>
                
                <b>Last Name</b>
                <input type='text' name='lastName' value={lastName} onChange={(event => setLastName(event.target.value))}></input>
                <br />

                <b>Email</b>
                <input type='email' name='email' value={email} onChange={(event => setEmail(event.target.value))}></input>
                <br />

                <b>Telephone</b>
                <input type='text' name='telephone' value={telephone} onChange={(event => setTelephone(event.target.value))}></input>
                <br />

                <button type="submit" form="form1" onClick={(event) => {
                    handleSubmit(event)
                    }}>Save</button>


                {/* <ul >
                    <li className="item">
                        <b>First Name</b>
                        <input type='text' name='firstName'></input>
                    </li>
                    <li className="item">
                        <b>Last Name</b>
                        <input type='text' name='lastName'></input>
                    </li>
                    <li className="item">
                        <b>Email</b>
                        <input type='email' name='email'></input>
                    </li>
                    <li className="item">
                        <b>Telephone</b>
                        <input type='text' name='telephone'></input>
                    </li>
                    <li>
                        <button type="submit" form="form1" value={buyer} onClick={(event) => {
                            handleSubmit(event)
                        }}>Save</button>
                    </li>
                </ul> */}

            </fieldset>
        </form>
        
    );
};


// console.log(data);
