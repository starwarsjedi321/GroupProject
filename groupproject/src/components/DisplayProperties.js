import React from 'react';
import "../styles/displayproperties.css"
import Properties from "../database/Properties.json";

function DisplayProperties() {
  return (
    <>
      <ul className='property-details'>
        {Properties.map(property => {
          return (
            <div className='property-card'>
            <li key={property.id} className='property-item'>{<img className='property-img' src={property.img.thumbnail}></img>}</li>
            <li key={property.id} >{property.address.city}</li>
            <li key={property.id}>{"£" + property.price}</li>
            <li key={property.id}>{property.type}</li>
            <li key={property.id}></li>
            </div>
          )
        })}
      </ul></>

  )
}

export default DisplayProperties

