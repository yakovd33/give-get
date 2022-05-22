import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UsersHelper from '../helpers/UsersHelper';

const ProItem = ({ id, name, description }) => {
    const [ profilePic, setProfilePic ] = useState(null);

    useEffect(() => {
        UsersHelper.getUserById(id, (user) => {
            setProfilePic(UsersHelper.getUserProfilePicture(user))
        })
    }, [])

    return ( 
        <div className="pro-item">
            <div className="pro-item-right">
                <div className="giver-img">
                    <img src={ profilePic } alt="" />
                </div>
            </div>

            <div className="pro-item-middle">
                <div className="name">{ name }</div>
                <div className="description">{ description }</div>
            </div>

            <div className="pro-item-left">
                <img src="/images/calendar.png" alt="" />
                <Link href={ `meet/${ id }` }><a href={ `meet/${ id }` }><button className="cute-btn">בחר תאריך</button></a></Link>
            </div>
        </div>
     );
}
 
export default ProItem;
