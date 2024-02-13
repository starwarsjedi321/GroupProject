import { React } from 'react';
import '../styles/tables.css';
import data from '../database/Properties.json';

const DisplaySellers = (props) => {

    // Checking which page we are on to display either buyer or seller

    let display;

    if (props.user == "Sellers") {
        display = data.sellers;
    }
    else if (props.user == "Buyers") {
        display = data.buyers;
    }

    return (
        <div>

            

            
            <h1>Find {props.user}</h1>

            <table name="sellerData">
                <tr>
                    <th>Seller ID: </th>
                    <th>Forename: </th>
                    <th>Surname: </th>
                    <th>Email: </th>
                </tr>
<<<<<<< HEAD
                {data.sellers.map((details) => {
=======
                {display.map((details) => {
>>>>>>> 9dbc0072800e30a63979b6eeb50de1193e42a2fa
                    return (
                        <tr key={details.id} >
                            <td>{details.ID}</td>
                            <td>{details.firstName}</td>
                            <td>{details.lastName}</td>
                            <td>{details.email}</td>
                        </tr>
                    )
                }
                )}
            </table>
        </div>
    );
}

export default DisplaySellers;