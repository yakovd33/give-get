import React, { useState, useEffect } from 'react';
import FilterItem from "../components/FilterItem";
import ProItem from "../components/ProItem";
import ApiHelper from '../helpers/ApiHelper';
import { fields } from '../constants/fields';
import Select from 'react-select';

const statuses = [
	'בוגר תואר',
	'בוגר קורס',
	'סטודנט',
	'עובד בתחום',
	'יועץ קריירה',
	'יועץ לימודים',
];

console.log(fields);

const Filter = () => {
    const [ selectedFields, setSelectedFields ] = useState([]);

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

    // Load statuses options
   useEffect(() => {
       let finalArrayString = '';

       selectedFields.map((fieldItem) => {
           finalArrayString += `${ fieldItem.value }, `;
       })

       ApiHelper.get(`users/get_givers_by_fields/${ finalArrayString }`, (res) => {
           setPros(res)
       })
   }, [ selectedFields ])

    return ( 
        <div className="container">
            <div id="filter-wrap">
                <h3 id="filter-title">שלום <span>Getter</span>, אנא בחר את האפשרות שהכי מתאימה לך</h3>

                <div id="field-filters">
                    <Select options={fields} placeholder="בחר/י מקצועות עליהם תרצה/י לקבל מידע" isMulti={ true } onChange={ (fields) => setSelectedFields(fields) } />
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