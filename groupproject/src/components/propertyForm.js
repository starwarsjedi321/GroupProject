import { React } from 'react';
import { useState } from 'react';
import Properties from '../database/Properties.json';

export default () => {

    let [firstLine, setFirstLine] = useState("");
    let [description, setDescription] = useState("");
    let [city, setCity] = useState();
    let [postCode, setPostCode] = useState();
    let [bathroom, setBathroom] = useState();
    let [bedroom, setBedroom] = useState();
    let [garden, setGarden] = useState();
    let [price, setPrice] = useState();
    let [type, setType] = useState();

    function onSubmit() {
        let propertyLength = Properties.properties.length + 1
        let properties = {
            property_id: propertyLength,
            "address": {
                "firstLine": firstLine,
                "city": city,
                "postcode": postCode
            },
            "img": {
                "thumbnail": "",
                "img3": "",
                "img4": "",
                "img2": "",
                "img5": "",
                "img6": "",
                "img7": "",
                "img8": "",
                "img9": ""
            },
            "description": description,
            "price": price,
            "type": type,
            "bedrooms": bedroom,
            "bathrooms": bathroom,
            "garden": garden
        }

        postData('http://localhost:3000/properties', properties);
    }

    // Function to be called for posting data to the json DB, takes paraments url and data (object)
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    return (
        <fieldset>
            <legend>Register Property</legend>
            <form onSubmit={onSubmit}>
                <div>
                <p>Address: </p>
                <label>First line: <input placeholder="First line of address" required onChange={event => setFirstLine(event.target.value)} name="firstLine" value={firstLine} />
                    *</label>
                <br></br>
                <label>City: <input placeholder="Enter City" required name="city" onChange={event => setCity(event.target.value)} value={city} />
                    *</label>
                <br></br>
                <label>Postcode: <input placeholder="Enter a valid Postcode" required name="postcode" onChange={event => setPostCode(event.target.value)} value={postCode} />
                    *</label></div>
                <br></br>
                <label>Price: <input required placeholder="Enter property price" onChange={event => setPrice(event.target.value)} value={price} />
                    *</label>
                <br></br>
                <label>Description: <input placeholder="Enter a description" type="text" name="description" onClick={event => setDescription(event.target.value)}/>
                </label>
                <br></br>
                <label>Type: </label>
                <input required placeholder="Property type" type="search" list="typeList" onChange={event => setType(event.target.value)} value={type} />*
                <datalist id="typeList">
                    <option>Detachted</option>
                    <option>Semi-detached</option>
                    <otion>Terrace</otion>
                    <option>Flat</option>
                    <option>Bungalow</option>
                </datalist>
                <br></br>
                <label>Bedrooms: <input placeholder="Enter No of bedrooms" required name="bedrooms" onChange={event => setBedroom(event.target.value)} value={bedroom} />
                    *</label>
                <br></br>
                <label>Bathrooms: <input placeholder="Enter No of bathrooms" required name="bathrooms" onChange={event => setBathroom(event.target.value)} value={bathroom} />
                    *</label>
                <br></br>
                <label>Garden: <input type="checkbox" name="garden" onClick={event => setGarden(event.target.checked)} />
                </label>
                <br></br>
                <button type="submit">Register</button>
            </form>
        </fieldset>
    )
}