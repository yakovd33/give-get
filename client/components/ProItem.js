import React, { useState } from 'react';
import Link from 'next/link';

const ProItem = ({ id, name, description }) => {
    return ( 
        <div className="pro-item">
            <div className="pro-item-right">
                <div className="giver-img">
                    <img src="/images/get-mini.png" alt="" />
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