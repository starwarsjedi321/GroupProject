import react from 'react';
import '../styles/form.css';



// function firstName(props){
//     return(
        
//     )
// }


export default function(props){
    return (
        <fieldset className="wrapper">
            <legend className="title">Register As A New Buyer</legend>

            <ul >
                <li className="item">
                    <b>First Name</b>
                    <input></input>
                </li>
                <li className="item">
                    <b>Last Name</b>
                    <input></input>
                </li>
                <li className="item">
                    <b>Email</b>
                    <input></input>
                </li>
                <li className="item">
                    <b>Telephone</b>
                    <input></input>
                </li>
                <li>
                    <input type="submit"></input>
                </li>
            </ul>

            

            

        </fieldset>
    );
};