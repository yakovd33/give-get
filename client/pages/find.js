import React, { useState, useEffect } from 'react';
import FilterItem from "../components/FilterItem";
import ProItem from "../components/ProItem";
import ApiHelper from '../helpers/ApiHelper';

const statuses = [
	'בוגר תואר',
	'בוגר קורס',
	'סטודנט',
	'עובד בתחום',
	'יועץ קריירה',
	'יועץ לימודים',
];

const Filter = () => {
    const [ statusSelected, setStatusSelected ] = useState(null);
    const [ optionSelected, setOptionSelected ] = useState(null);

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

    const [ statusesOptions, setStatusesOptions ] = useState([]);

    const handleChange = (e, status) => {
        setOptionSelected(e.target.value);
        setStatusSelected(status);
    }

    // Load statuses options
    useEffect(() => {
        ApiHelper.get('users/get_status_options', (options) => {
            setStatusesOptions(options);
        });
    }, []);

    // Get givers list
    useEffect(() => {
        ApiHelper.get(`users/get_givers_by_status/${ statusSelected }/${ optionSelected }`, (givers) => {
            setPros(givers);
            console.log(givers)
        })
        console.log('Status: ' + statusSelected + ' option: ' + optionSelected)
    }, [ statusSelected, optionSelected ])

    return ( 
        <div className="container">
            <div id="filter-wrap">
                <h3 id="filter-title">שלום <span>Getter</span>, אנא בחר את האפשרות שהכי מתאימה לך</h3>

                <div id="filter-items">
                    { statuses.map((status) => (
                        <div className="filter-item">
                            <div className="img"><img src="/images/filters/1.png" alt="" /></div>
                            <div className="title">{ status }</div>
                            <div className="options">
                                <select name="" id="" onChange={ (e) => handleChange(e, status) }>
                                    <option value="">הכל</option>
                                    { statusesOptions[status] && statusesOptions[status].map((option) => <option value={ option }>{ option }</option>) }
                                </select>
                            </div>
                        </div>
                    )) }
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