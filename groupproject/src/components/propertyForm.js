import React from 'react';

function propertyForm (properties) {
    return (
    <fieldset>
        <legend>Register Property</legend>
        <form>
            <p>Address:</p>
                <label>First line: <input name="firstLine" value={properties.firstLine}/>
                </label>
                <br></br>
                <label>City: <input name="city" value={properties.city}/>
                </label>
                <br></br>
                <label>Postcode: <input name="postcode" value={properties.postcode}/></label>
                <br></br>
                <label>Price: <input name="price" value={properties.name}/></label>
                <br></br>
                <label>Type: </label>
                <input type="search" list="typeList" value={properties.type}/>
                <datalist id="typeList">
                    <option>...</option>
                    <option>Detachted</option>
                    <option>Semi-detached</option>
                    <otion>Terrace</otion>
                    <option>Flat</option>
                    <option>Bungalow</option>
                </datalist>
                <br></br>
                <label>Bedrooms: <input name="bedrooms" value={properties.bedrooms}/></label>
                <br></br>
                <label>Bathrooms: <input name="bathrooms" value={properties.bathrooms}/></label>
                <br></br>
                <label>Garden: <input type="checkbox" name="garden" value={properties.garden}/></label>
        </form>
    </fieldset>
    )
}

export default propertyForm;