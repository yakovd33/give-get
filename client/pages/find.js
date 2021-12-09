import React, { useState, useEffect } from 'react';
import FilterItem from "../components/FilterItem"
import ProItem from "../components/ProItem"

const Filter = () => {
    const [ pros, setPros ] = useState([
        {
            id: 60,
            name: 'יעקב שטרית',
            description: 'בוגרת תואר מדעי המחשב, מכללת כנרת. נמצאת לפני עבודה בתחום'
        }, {
            id: 70,
            name: 'דניאלה אסייג',
            description: 'בוגרת תואר מדעי המחשב, מכללת כנרת. נמצאת לפני עבודה בתחום'
        }
    ]);

    return ( 
        <div className="container">
            <div id="filter-wrap">
                <h3 id="filter-title">שלום <span>Getter</span>, אנא בחר את האפשרות שהכי מתאימה לך</h3>

                <div id="filter-items">
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                    <FilterItem/>
                </div>

                <h3 id="pros-list-title">רשימת מומחים:</h3>
                <div id="pros-list">
                    { pros.map((pro) => (
                        <ProItem id={ pro.id } name={ pro.name } description={ pro.description }/>
                    )) }

                    { !pros.length && <h4 id="no-pros-found">לא נמצאו מומחים לפי החיפוש.</h4> }
                </div>
            </div>
        </div>
     );

    

}
 
export default Filter;