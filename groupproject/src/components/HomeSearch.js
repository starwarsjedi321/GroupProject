import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Properties from "../database/Properties.json";

import HomeImg from '../Images/homeImage.jpg';
import "../styles/homeSearch.css";

const HomeSearch = () => {
    let [search, setSearch] = useState("");

    function setSubstring() {
        setSearch(document.getElementById("propSearchField").value);
        console.log(search);
    }
    let properties = Properties.properties;
    let hotProperties = properties.slice(0, 3);
    console.log(hotProperties);

    let renderedProps = [];

    renderedProps = hotProperties.map((property) => (
        <div className="carousel-item" key={property.id}>
            <div className="carousel-container">
                <img class="propImg" src={property.img.thumbnail} alt={property.address.firstLine} />
                <h2>{property.address.firstLine}, {property.address.city}</h2>
                <div className="overlay">
                    <h2>{property.price}</h2>
                </div>
            </div>
        </div>
    ));




    return (
        <>
            <div class="imageContainer">
                <img id="banner" src={HomeImg} alt="homeImg"></img>
                <fieldset class="homeSearch">

                    <div class="searchNav">
                        <h2 class="searchText">Find Your Dream Home</h2>
                        <h4 class="searchText"> Search properties for sale in the UK</h4>
                        <div class="inputs">
                            <input id="propSearchField" type="text" onChange={(event) => {
                                setSearch(event.target.value)
                            }}></input>
                            <Link to={`/properties/${search}`}>
                                <button class="searchBtn" onClick={setSubstring}>Search</button>
                            </Link>
                        </div>
                    </div>
                </fieldset >
            </div>
            <h2>Popular right now: </h2>
            <div className="carousel">
                <AliceCarousel mouseTracking items={renderedProps}>
                </AliceCarousel>
            </div>
        </>

    )
}
export default HomeSearch;