import { React, useState } from 'react';


const HomeSearch = () => {


    function keyPress() {
        const searchStr = document.getElementById("propSearchField").value;
        console.log(searchStr);

        if (searchStr.length === 0) {
            document.getElementById("searchBtn").setAttribute("disabled", "true");

        } else {
            document.getElementById("searchBtn").removeAttribute("disabled");
        }
    }

    async function searchJSONFile(substring) {
        const lowerCaseSubstring = substring.toLowerCase();

        try {
            //Fetch the external JSON file
            return fetch('../database/Properties.json')
                .then(response => response.json())
                .then(jsonData => {
                    //Filter the JSON data based on the substring
                    const results = jsonData.filter(obj => {
                        for (const key in obj) {
                            if (typeof obj[key] === 'string' && obj[key].toLowerCase().include(lowerCaseSubstring)) {
                                return true;
                            }
                        }
                        return false;
                    });
                    console.log(results);
                    return results;
                })
        } catch (error) {
            console.error('Error fetching JSON:', error);
            return [];
        }
    }

    // async function performSearch() {
    //     const searchStr = document.getElementById("propSearchField").value;
    //     if (searchStr.length > 0) {
    //         const results = await searchJSONFile(searchStr);
    //         setSearchResults(results);
    //     }
    // }

    return (
        <div name="searchNav">
            <h2>Find Your Dream Home</h2>
            <h4>Search properties for sale in the UK</h4>
            <input id="propSearchField" onKeyUp={keyPress} type="text"></input>
            <button id="searchBtn" onClick={searchJSONFile()}>Search</button>
        </div>
    )
}
export default HomeSearch;