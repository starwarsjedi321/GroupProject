import React from 'react';
import "../styles/displayproperties.css"
import Properties from "../database/Properties.json";
import { Link, useParams } from 'react-router-dom'
import checkQuery from '../utils/checkQuery';
import email from '../Images/email.png';
import heart from '../Images/heart.png';
import phone from '../Images/phone.png';

function DisplayProperties() {

  let filteredProperties = [];
  const properties = Properties.properties;

  let { query } = useParams();

  if (query) {
    query = checkQuery(query);
    properties.forEach(property => {
      if (Object.values(property.address).includes(query)) {
        filteredProperties.push(property)
      };
    });
  };

  const chosenArray = filteredProperties.length === 0 ? Properties.properties : filteredProperties;

  return (
    <>
      {query !== 'All' ?
        <h1>{`Properties in ${query}`}</h1>
        : <h1>{`Available Properties`}</h1>
      }
      <ul className='property-details'>
        {chosenArray.map(property => {
          return (
            <Link to={`/view/${property.property_id}`}>
              <div className='property-card'>
                <li key={property.property_id} className='property-item'>{<img className='property-img' src={property.img.thumbnail}></img>}</li>
                <div className='property-text'>
                <li >{property.address.city}</li>
                <li>{"£" + property.price}</li>
                <li >{property.type}</li>
                <div className='icon-container'>
                  <p className='icon' target="_blank"><img id="eamil" name="Icons" alt="email" src={email} class = "icon"></img></p>
                  <p className='icon' target="_blank"><img id="phone" name="Icons" alt="phone" src={phone} class = "icon"></img></p>
                  <p className='icon' target="_blank"><img id="heart" name="Icons" alt="heart" src={heart} class = "icon"></img></p>
                </div>
                </div>
              </div>
            </Link>
          )
        })}
      </ul></>

  )
}

export default DisplayProperties;

