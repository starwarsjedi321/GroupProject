import React, { useEffect, useState } from 'react';
import "../styles/displayproperties.css"
import Properties from "../database/Properties.json";
import { Link, useParams } from 'react-router-dom'
import checkQuery from '../utils/checkQuery';
import email from '../Images/email.png';
import heart from '../Images/heart.png';
import phone from '../Images/phone.png';
import sortingProperties from '../utils/sortingProperties';
import deleteCall from '../utils/deleteCall';
import formatPrice from '../utils/formatPrice';

function DisplayProperties() {

  let [filterBy, setFilter] = useState('Highest Price');

  const regexTimeNumeric = /\b\d{1,2}:\d{2}:\d{2}\b|\bat\b/;


  let properties = sortingProperties(Properties, filterBy);
  let filteredProperties = [];

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
  const totalSearchResult = filteredProperties.length === 0 ? Properties.properties.length : filteredProperties.length;

  return (
    <>
      {query !== 'All' ?
        <h1>{`Properties in ${query}`}</h1>
        : <h1>{`Available Properties`}</h1>
      }
      <ul className='filter-list'>
        <li>{`${totalSearchResult} results`}</li>
        <li>Sort:
          <select onChange={(event) => { setFilter(event.target.value) }}>
            <option value="Highest Price">Highest Price</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Newest Listed">Newest Listed</option>
            <option value="Oldest Listed">Oldest Listed</option>
          </select>
        </li>
      </ul>
      <ul className='property-details'>
        {chosenArray.map(property => {
          let time = property.timeUploaded;
          time = property.timeUploaded.split(regexTimeNumeric);
          return (
            <>
              <div className='property-card'>
                <Link className='imagelink' to={`/view/${property.property_id}`}>
                  <li key={property.property_id} className='property-item'>{<img className='property-img' src={property.img.thumbnail}></img>}</li>
                  <li className='empty'></li>
                    <li className='address'>{property.address.city}</li>
                  <li className='price'>{'£' + formatPrice(property.price)}</li>
                  <li className='type'>{property.type}</li>
                </Link>
                <li>
                  <input className='delete-btn' value="button for delete" name={property.id} type="button" onClick={event => { deleteCall(event.target.name) }} />
                </li>
                
                  <ul className='icon-container'>
                    <li className='icon' target="_blank"><img id="eamil" name="Icons" alt="email" src={email} class = "icon"></img></li>
                    <li className='icon' target="_blank"><img id="phone" name="Icons" alt="phone" src={phone} class = "icon"></img></li>
                    <li className='icon' target="_blank"><img id="heart" name="Icons" alt="heart" src={heart} class = "icon"></img></li>

                  </ul>
                  
                
                </div>
            </>
          )
        })}
      </ul></>

  )
}

export default DisplayProperties;