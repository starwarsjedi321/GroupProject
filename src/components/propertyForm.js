import { React } from 'react';
import { useState } from 'react';
import Properties from '../database/Properties.json';
import '../styles/form.css';


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

        const options = {
            timeZone : "Europe/London",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          }
        
        let timeUploaded = new Date();
        timeUploaded = timeUploaded.toLocaleString('en-GB', options)
        

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
            "garden": garden,
            "timeUploaded": timeUploaded
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
        
            
            <form id="form1" onSubmit={onSubmit}>
                <fieldset className='wrapper'>
                    <legend className='title'>Register Property</legend>
                    <p>Address: </p>
                    <b className='labels'>First Line: </b>
                    <br />
                    <input className="fields" type="text" placeholder="First line of address" required onChange={event => setFirstLine(event.target.value)} name="firstLine" value={firstLine} />
                    <br></br>

                    <b className='labels'>City:</b>
                    <br />
                    <input className="fields" placeholder="Enter City" required name="city" onChange={event => setCity(event.target.value)} value={city} />
                    <br></br>

                    <b className='labels'>Postcode:</b>
                    <br />
                    <input className="fields" placeholder="Enter a valid Postcode" required name="postcode" onChange={event => setPostCode(event.target.value)} value={postCode} />
                    <br></br>
                    <br />
                    
                    <b className='labels'>Price: </b>
                    <br/>
                    <input className="fields" required placeholder="Enter property price" onChange={event => setPrice(event.target.value)} value={price} />
                    <br></br>

                    <b className='labels'>Description: </b> 
                    <br />
                    <input className="fields" placeholder="Enter a description" type="text" name="description" onClick={event => setDescription(event.target.value)}/>
                    <br></br>


                    <b className='labels'>Type: </b>
                    <input className="fields" required placeholder="Property type" type="search" list="typeList" onChange={event => setType(event.target.value)} value={type} />*
                    <datalist id="typeList">
                        <option>Detachted</option>
                        <option>Semi-detached</option>
                        <otion>Terrace</otion>
                        <option>Flat</option>
                        <option>Bungalow</option>
                    </datalist>
                    <br></br>

                    <b className='labels'>Bedrooms: </b>
                    <input className="fields" placeholder="Enter No of bedrooms" required name="bedrooms" onChange={event => setBedroom(event.target.value)} value={bedroom} />
                    <br></br>

                    <b className='labels'>Bathrooms: </b>
                    <br />
                    <input className="fields" placeholder="Enter No of bathrooms" required name="bathrooms" onChange={event => setBathroom(event.target.value)} value={bathroom} />
                    <br></br>

                    <b className='labels'>Garden: </b>
                    <br />
                    <input className="fields" type="checkbox" name="garden" onClick={event => setGarden(event.target.checked)} />
                    <br></br>

                    <button type="submit">Register</button>
                    <br />
                </fieldset>
            </form>
        
    )
}