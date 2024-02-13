import React from 'react';
import "../styles/displayproperties.css"
import Properties from "../database/Properties.json";
import { Link, useParams } from 'react-router-dom'
import checkQuery from '../utils/checkQuery';
import DeleteObject from '../components/deleteFunction.js';

function DisplayProperties() {

  function deleteCall (key) {
    if (confirm("Are you sure you want to delete this property?")) {
      DeleteObject("properties", key)
    }
 
  }

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
            <>
            <Link to={`/view/${property.property_id}`}>
              <div className='property-card'>
                <li key={property.property_id} className='property-item'>{<img className='property-img' src={property.img.thumbnail}></img>}</li>
                <li >{property.address.city}</li>
                <li>{"£" + property.price}</li>
                <li>{property.type}</li>
              </div>
            </Link>
            {/* {console.log(property.property_id)} */}
                          <input value="button for delete" name={property.id} type="button" onClick={event => {deleteCall(event.target.name)}}/>
                          </> 
          )
        })}
      </ul></>

  )
}

export default DisplayProperties;

