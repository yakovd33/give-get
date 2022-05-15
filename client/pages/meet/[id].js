import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthHelper from '../../helpers/AuthHelper';
import ChatHelper from '../../helpers/ChatHelper';
import UsersHelper from '../../helpers/UsersHelper';
import Calendar from '../../components/Calendar';
import { FiSend } from 'react-icons/fi';
import ApiHelper from '../../helpers/ApiHelper';
import DateHelper from '../../helpers/DateHelper';
import moment from 'moment';

const Meet = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ user, setUser ] = useState(AuthHelper.getUser() );
    const [ meetUser, setMeetUser ] = useState(null);

    var today = new Date();
    const [ date, setDate ] = useState(today.getDate());
    const [ hour, setHour ] = useState(0);
    const [ minute, setMinute ] = useState(0);
    const [ curUser, setCurUser ] = useState(AuthHelper.getUser());
    const [ meeting, setMeeting ] = useState(null);
    const [ meetingFeedback, setMeetingFeedback ] = useState('');

    const pad = (num) => {
        if (num.toString().length >= 2) return num;
        return ( Math.pow( 10, 2 ) + Math.floor(num) ).toString().substring( 1 );
    }

    useEffect(() => {
        // Get user details
        if (id) {
            UsersHelper.getUserById(id, (user) => setMeetUser(user));
        }

        // Recieve meeting details
        ApiHelper.get(`meetings/${ id }`, (meeting) => {
            if (meeting != '') {
                setMeeting(meeting);
                setHour(meeting.time.split(':')[0]);
                setMinute(meeting.time.split(':')[1]);
                setDate(meeting.date);
            }
        });
    }, [ id ]);

    const handleSendMessage = () => {
        if (meetUser) {
            ChatHelper.openChatbox(id, meetUser.fullname);
        }
    }

    const handleSetMeeting = (e) => {
        e.preventDefault();

        var today = new Date();
        var newDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + date

        ApiHelper.post(`meetings/${ id }`, {
            date: newDate,
            hour: hour + ':' + minute
        });

        setMeetingFeedback('פגישה נקבעה בהצלחה :)');
    }

    return (
        <div className="container">
            {/* { user && user.type == 'getter' && 'getter' } */}

            <div id="meeting-wrap">
                <div id="meeting-options">
                    { curUser && curUser.type == 'giver' && (
                    <form action="" id="set-meeting-form">
                        <Calendar date={ date } setDate={ setDate }/>
                        
                        <br/>
                        <p><strong>שעת הפגישה:</strong></p>
                        <div id="time-select">
                            <select id="hour-select" defaultValue={ hour } value={ hour } onChange={ (e) => setHour(e.target.value)}>
                                { [...Array(23)].map((_, index) => (
                                    <option value={ pad(index) }>{ pad(index) }</option>
                                )) }
                            </select>

                            :

                            <select id="minute-select" defaultValue={ minute } value={ minute } onChange={ (e) => setMinute(e.target.value)}>
                                { [...Array(61)].map((_, index) => (
                                    <option value={ pad(index) }>{ pad(index) }</option>
                                )) }
                            </select>
                        </div>

                        <div id="set-meeting-feedback">{ meetingFeedback }</div>

                        <input type="submit" className="cute-btn" onClick={ (e) => handleSetMeeting(e) } value="קבע/י" />

                    </form>
                    ) }
                </div>

                <div id="meeting-left">
                    <div className="pro-item">
                        <div className="pro-item-right">
                            <div className="giver-img">
                                <img src="/images/get-mini.png" alt="" />
                            </div>
                        </div>

                        <div className="pro-item-middle">
                            <div className="name">{ meetUser && meetUser.fullname }</div>
                            { meetUser && meetUser.last_seen && <p className="last-seen-para">נראה לאחרונה לפני { DateHelper.timeSince(moment(meetUser.last_seen).valueOf()) }</p> }
                            <br/>
                            <button className="cute-btn" onClick={ handleSendMessage }>שלח הודעה <FiSend/></button>
                        </div>
                    </div>

                    { meetUser && <h2 id="meeting-title">קביעת פגישה עם - { meetUser.fullname }</h2> }
                    { !meeting && <span id="no-meetings-msg">לא נקבעה פגישה.</span> }
                    { meeting && <span id="meeting-textual">נקבעה פגישה בתאריך { meeting.date } בשעה { meeting.time.substring(0, 5) }</span> }
                </div>
            </div>

        </div>
    )
}

export default Meet
