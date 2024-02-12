import { React } from 'react';
import '../styles/tables.css';
import data from '../database/Seller.json';

const DisplaySellers = () => {

    return (
        <div>
            <h1>Find Sellers</h1>

            <table name="sellerData">
                <tr>
                    <th>Seller ID: </th>
                    <th>Forename: </th>
                    <th>Surname: </th>
                    <th>Email: </th>
                    <th>Telephone: </th>
                </tr>
                {data.sellers.map((details) => {
                    return (
                        <tr key={details.id} >
                            <td>{details.ID}</td>
                            <td>{details.firstName}</td>
                            <td>{details.lastName}</td>
                            <td>{details.email}</td>
                            <td>{details.telephone}</td>
                        </tr>
                    )
                }
                )}
            </table>
        </div>
    );
}

export default DisplaySellers;