import { React } from 'react';
import { useState } from 'react';

fetch('./Properties',
{
    method: "PUT",
    body: JSON.stringify({a: 1, b: 2})
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })


let data = {};
export default (properties) => {
    let [inputs, setInputs] = useState();


    function doInput(event) {
        console.log(event.name);
        if (event.target.name) {
            let newData = { ...inputs }
            newData[event.target.name] = event.target.value;
            setInputs(newData);
        }
    }

    return (
        <fieldset>
            <legend>Register Property</legend>
            <form onInput={event => doInput(event)}>
                <p>Address:</p>
                <label>First line: <input name="firstLine" value={properties.firstLine} />
                </label>
                <br></br>
                <label>City: <input name="city" value={properties.city} />
                </label>
                <br></br>
                <label>Postcode: <input name="postcode" value={properties.postcode} /></label>
                <br></br>
                <label>Price: <input name="price" value={data.price} /></label>
                <br></br>
                <label>Type: </label>
                <input type="search" list="typeList" value={data.type} />
                <datalist id="typeList">
                    <option>...</option>
                    <option>Detachted</option>
                    <option>Semi-detached</option>
                    <otion>Terrace</otion>
                    <option>Flat</option>
                    <option>Bungalow</option>
                </datalist>
                <br></br>
                <label>Bedrooms: <input name="bedrooms" value={data.bedrooms} /></label>
                <br></br>
                <label>Bathrooms: <input name="bathrooms" value={data.bathrooms} /></label>
                <br></br>
                <label>Garden: <input type="checkbox" name="garden" value={data.garden} /></label>
            </form>
            <button> Register </button>
        </fieldset>
            )}