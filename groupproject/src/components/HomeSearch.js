import { React, useState } from 'react';
import { Link } from 'react-router-dom';


const HomeSearch = () => {
    let [search, setSearch] = useState("");

    function setSubstring() {
        setSearch(document.getElementById("propSearchField").value);
        console.log(search);
    }

    return (
        <div name="searchNav">
            <h2>Find Your Dream Home</h2>
            <h4>Search properties for sale in the UK</h4>
            <input id="propSearchField"  type="text" onChange={(event) => {
                setSearch(event.target.value)
            }}></input>
            <Link to={`/properties/${search}`}>
            <button id="searchBtn" onClick={setSubstring}>Search</button>
            </Link>
        </div>
    )
}
export default HomeSearch;