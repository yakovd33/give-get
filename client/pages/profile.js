import React, { useState, useEffect } from 'react'
import AuthHelper from '../helpers/AuthHelper'
import DateHelper from '../helpers/DateHelper'
import moment from 'moment'
import { Helmet } from "react-helmet";
import UsersHelper from '../helpers/UsersHelper';
import ApiHelper from '../helpers/ApiHelper';
import axios from 'axios';

function profile() {
    const [ curUser, setCurUser ] = useState(null);
    const [ image, setImage ] = useState(null);

    useEffect(() => {
        UsersHelper.getUserById(AuthHelper.getUserId(), (user) => {
            setCurUser(user)
        })
    }, [])

    useEffect(() => {
        // Upload new profile picture
        if (!image) return

        let file_fd = new FormData();
        file_fd.append('file', image);
        file_fd.append('user_id', AuthHelper.getUserId());

        axios.post(`https://eropa.co.il/giveget/upload.php`, file_fd).then((res) => {
            ApiHelper.post(`users/set_profile_pic`, { url: res.data }, (result) => {
                console.log(result);
            });
        })
    }, [ image ]);

    const handleCuteSelect = (e) => {
        e.preventDefault();

        document.getElementById("file-select").click();
    }

    return (
        <div className="container profile-wrap">
            <Helmet>
                { curUser && <title>הפרופיל שלי - { curUser.fullname }</title> }
            </Helmet>

            <div className="pro-item">
                <div className="pro-item-right">
                    <input type="file" id="file-select" onChange={ (e) => setImage(e.target.files[0]) } style={{ visibility: 'hidden'}}/>
                    <div className="giver-img profile-picture-upload-trigger" onClick={ (e) => handleCuteSelect(e) }>
                        <img src={ UsersHelper.getUserProfilePicture(curUser) } alt="" />
                    </div>
                </div>

                <div className="pro-item-middle">
                    <div className="name">{curUser && curUser.fullname}</div>
                    {curUser && curUser.last_seen && <p className="last-seen-para">נראה לאחרונה לפני {DateHelper.timeSince(moment(curUser.last_seen).valueOf())}</p>}
                </div>
            </div>
        </div>
    )
}

export default profile
