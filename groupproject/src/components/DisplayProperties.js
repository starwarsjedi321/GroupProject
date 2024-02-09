import React from 'react';
import "../styles/displayproperties.css"
import Properties from "../database/Properties.json";
import { Link } from 'react-router-dom';

function DisplayProperties() {
  return (
    <>
      <ul className='property-details'>
        {Properties.map(property => {
          return (
            <Link to={`view/${property.property_id}`}>
              <div className='property-card'>
                <li key={property.property_id} className='property-item'>{<img className='property-img' src={property.img.thumbnail}></img>}</li>
                <li >{property.address.city}</li>
                <li>{"£" + property.price}</li>
                <li>{property.type}</li>
                <li></li>
              </div>
            </Link>
          )
        })}
      </ul></>

  )
}

export default DisplayProperties;

