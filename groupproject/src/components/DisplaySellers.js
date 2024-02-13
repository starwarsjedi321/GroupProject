import { React } from 'react';
import '../styles/displayUsers.css';
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
        <div className="total">
            <h1>Find {props.user}</h1>
            <br />

            <table name="sellerData">
                <tr>
                    <th>Seller ID: </th>
                    <th>Forename: </th>
                    <th>Surname: </th>
                    <th>Email: </th>
                </tr>
                {display.map((details) => {
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