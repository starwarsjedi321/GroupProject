import { React } from 'react';
import { useState } from 'react';

        let data;
export default (properties) => {
    let [inputs, setInputs] = useState();

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

    function doInput(event) {
        if (event.target.name) {
            let newData = { ...inputs }
            newData[event.target.name] = event.target.value;
            setInputs(newData);
        }
    }

    return (
        <fieldset>
            <legend>Register Property</legend>
            <form action={event => doInput(event).then(
                postData("http://localhost:3000/properties", {inputs}))}>
                <p>Address:</p>
                <label>First line: <input name="firstLine" value={properties.address} />
                </label>
                <br></br>
                <label>City: <input name="city" value={properties.city} />
                </label>
                <br></br>
                <label>Postcode: <input name="postcode" value={properties.postcode} /></label>
                <br></br>
                <label>Price: <input name="price" value={properties.price} /></label>
                <br></br>
                <label>Type: </label>
                <input type="search" list="typeList" value={properties.type} />
                <datalist id="typeList">
                    <option>...</option>
                    <option>Detachted</option>
                    <option>Semi-detached</option>
                    <otion>Terrace</otion>
                    <option>Flat</option>
                    <option>Bungalow</option>
                </datalist>
                <br></br>
                <label>Bedrooms: <input name="bedrooms" value={properties.bedrooms} /></label>
                <br></br>
                <label>Bathrooms: <input name="bathrooms" value={properties.bathrooms} /></label>
                <br></br>
                <label>Garden: <input type="checkbox" name="garden" value={properties.garden} /></label>
                <input type="submit"/>
            </form>
            <button > Register </button>
        </fieldset>
            )}