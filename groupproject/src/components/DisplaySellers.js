import { React } from 'react';
import '../styles/displayUsers.css';
import data from '../database/Properties.json';

const DisplaySellers = (props) => {

    // Checking which page we are on to display either buyer or seller

    let display;

    if (props.user == "Seller") {
        display = data.sellers;
    }
    else if (props.user == "Buyer") {
        display = data.buyers;
    }

    return (
        <div className="total">
            
            <h1>Find A {props.user}</h1>
            <br />
            <div className = "scroll">
                <table  name="sellerData">
                    <tr>
                        {/* <th>{props.user}: </th> */}
                        <th>Forename: </th>
                        <th>Surname: </th>
                        <th className='smallScreen' >Email: </th>
                    </tr>

                    
                    {display.map((details) => {
                        return (
                            <tr key={details.id} >
                                {/* <td>{details.ID}</td> */}
                                <td>{details.firstName}</td>
                                <td>{details.lastName}</td>
                                <td className='smallScreen'>{details.email}</td>
                            </tr>
                        )
                    }
                    )}
                </table>
            </div>
            
        </div>
    );
}

export default DisplaySellers;