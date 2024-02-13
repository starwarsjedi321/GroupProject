import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../Images/homeImage.jpg';
import "../styles/homeSearch.css";

const HomeSearch = () => {
    let [search, setSearch] = useState("");

    function setSubstring() {
        setSearch(document.getElementById("propSearchField").value);
        console.log(search);
    }

    return (
        <div class="imageContainer">
            <img src={HomeImg} alt="homeImg"></img>
            <fieldset class="homeSearch">

                <div class="searchNav">
                    <h2>Find Your Dream Home</h2>
                    <h4>Search properties for sale in the UK</h4>
                    <input id="propSearchField" type="text" onChange={(event) => {
                        setSearch(event.target.value)
                    }}></input>
                    <Link to={`/properties/${search}`}>
                        <button class="searchBtn" onClick={setSubstring}>Search</button>
                    </Link>
                </div>
        </fieldset >
        </div>
    )
}
export default HomeSearch;