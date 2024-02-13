import react, { useState } from 'react';
import { ReactDOM } from 'react';
import properties from '../database/Properties.json';
import '../styles/form.css';


export default function (props){
   // const[inputs, setInputs] = useState();
    const[firstName,setfirstName] = useState("");
    const[lastName, setlastName] = useState("");
    const[email, setemail] = useState("");
    const[telephone, settelephone] = useState("");



   
    /*const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        const inputs = Object .fromEntries(data.entries());
        inputs.properties = data.getAll("Seller");
        console.log({inputs});
    }
    window.onload=function(){
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit).preventDefault();
    }*/

    function handleSubmit(event){
        event.preventDefault();
        let Sellerslist = properties.sellers;
        let sellerlength = Sellerslist.length;
        let id = sellerlength +1 ;   


        let dataItem ={
            ID: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            telephone: telephone
        }
    
    


/*document.getElementById('Properties').addEventListener('submit', function(e){
    e.preventDefault();
})

//const data = new FormData(this);
//const Object = Object.fromEntries(FormData.entries());
*/



        fetch('http://localhost:3000/sellers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataItem),
        })
        .then(Response => Response.json())
        .then(dataItem => console.log(dataItem))
        .catch((error) =>console.error('error:',error))



    }

//let ID = 0 ;
//num++;
//console.log(num);

return(
    <form id = "form1" onSubmit={(event) => {handleSubmit(event)}}>
        <fieldset className = "wrapper">
            <legend className = "title">Register As A New Seller</legend>

            <b className='labels'>First Name</b>
                <input 
                    type = "text"
                    name = "firstName"
                    id ="firstName"
                    onChange={(event => setfirstName(event.target.value))} 
                    required="required"
                    className='fields'
                />
            <br/>

            <b className='labels'>Last Name</b>
                <input
                 type = "text"
                 name = "lastName"
                 id ="lastName"
                 onChange={(event => setlastName(event.target.value))} 
                required="required"
                className='fields'
                />
            <br/>

            <b className='labels'>Email</b>
                <input
                type = "email"
                name = "email"
                id ="email"
                onChange={(event => setemail(event.target.value))} 
                required="required"
                className='fields'
                />
            <br/>
            <b className='labels'>Telephone</b>
                <input
                type = "text"
                name = "telephone"
                id = "telephone"
                onChange={(event => settelephone(event.target.value))} 
                required="required"
                className='fields'
                />
            <br/>
            <button className='submit' form = "form1"> Save  </button>
        </fieldset>
    </form>
)
}

