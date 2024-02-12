// import React from 'react'
// import { useParams } from 'react-router-dom'
// import Properties from "../database/Properties.json"
// import "../styles/displayselectedproperty.css";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css"

// function DisplaySelectedProperty() {
//     let { property_id } = useParams();
//     property_id = Number(property_id);

    const getPropertyDetails = Properties.properties.filter(property => {
        if (property_id === property.property_id) return property;
    })

//     let propertyImgs = Object.values(getPropertyDetails[0].img);

    const renderImgTags = propertyImgs.map((imgLink, index) => {
        return <img key={index} src={imgLink} class='sliderimg'></img>
    })
    console.log(getPropertyDetails[0].address.firstLine)
    return (
        <div className='carousel-container'>
            <AliceCarousel mouseTrackingEnabled>
                {renderImgTags}
            </AliceCarousel>
            <p>{getPropertyDetails[0].address.firstLine}</p>
            <p>{getPropertyDetails[0].address.city}</p>
            <p>{getPropertyDetails[0].address.postcode}</p>
            <p>{getPropertyDetails[0].price}</p>
            <p>{getPropertyDetails[0].type}</p>
            <p>Bedrooms {getPropertyDetails[0].bedrooms}</p>
            <p>Bathrooms {getPropertyDetails[0].bathrooms}</p>
            <p>Garden {getPropertyDetails[0].garden}</p>
        </div>
    )

// export default DisplaySelectedProperty
