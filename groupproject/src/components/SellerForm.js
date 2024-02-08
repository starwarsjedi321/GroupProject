import react, { useState } from 'react'
import { ReactDOM } from 'react';

export default function SellerForm (){
    const[inputs, setInputs] = useState();


const handelSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs);
}
return(
    <form>
        <fieldset>
            <legend> Seller</legend>
            <label> Please enter your first name:
                <input 
                    type = "text"
                    name = "firstName"
                />
            </label> 
            <label> Please enter your Last name:
                <input
                 type = "text"
                 name = "lastName"
                />
            </label>
            <label>Please enter your email:
                <input
                type = "text"
                name = "email"
                />
            </label>
            <label> Please enter your telephone number:
                <input
                type = "text"
                name = "telephone"
                />
            </label>
            <button onClick={handelSubmit}> Submit</button>
        </fieldset>
    </form>
)
}
/*export default (props) =>{
    <div id ="form">
        {props.firstName ? firstName(props.firstName): '' }
    </div>

}*/

