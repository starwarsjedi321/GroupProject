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

    async function searchJSONFile() {
        let substring = document.getElementById("propSearchField").value;
        console.log(substring);
        const lowerCaseSubstring = substring.toLowerCase();

        try {
            //Fetch the external JSON file
            return await fetch('http://localhost:3001/properties', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                }
            })
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

    return (
        <div name="searchNav">
            <h2>Find Your Dream Home</h2>
            <h4>Search properties for sale in the UK</h4>
            <input id="propSearchField" onKeyUp={keyPress} type="text"></input>
            <button id="searchBtn" onClick={searchJSONFile}>Search</button>
        </div>
    )
}
export default HomeSearch;