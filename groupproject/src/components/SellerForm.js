import react, { useState } from 'react'
import { ReactDOM } from 'react';

export default function SellerForm (){
    const[inputs, setInputs] = useState();


const handelSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    const inputs = Object .fromEntries(data.entries());
    console.log({inputs});
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

return(
    <form>
        <fieldset>
            <legend> Seller</legend>
            <label for="firstName"> Please enter your first name:
                <input 
                    type = "text"
                    name = "firstName"
                    id ="firstName"
                />
            </label> 
            <label for ="lastName"> Please enter your Last name:
                <input
                 type = "text"
                 name = "lastName"
                 id ="lastName"
                />
            </label>
            <label for = "email">Please enter your email:
                <input
                type = "email"
                name = "email"
                id ="email"
                />
            </label>
            <label for = "telephone"> Please enter your telephone number:
                <input
                type = "text"
                name = "telephone"
                id = "telephone"
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

