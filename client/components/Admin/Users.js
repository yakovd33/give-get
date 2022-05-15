import React, { useEffect, useState } from 'react';
import ApiHelper from '../../helpers/ApiHelper';

const Users = ({ tab, setTab }) => {
    const [ users, setUsers ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ usersCount, setUsersCount ] = useState(0);

    useEffect(() => {
        if (tab === 'users') {
            ApiHelper.get(`users/${ page }`, (res) => {
                setUsers(res.users);
                setUsersCount(res.usersCount);
            })
        }
    }, [ tab, page ]);

    return (
        <>
            <table className="table">
                <tr>
                    <th>שם מלא</th>
                    <th>אימייל</th>
                    <th>טלפון</th>
                    <th>סוג</th>
                    <th>פעולות</th>
                </tr>

                { users.map((user) => (
                    <tr>
                        <td>{ user.fullname }</td>
                        <td>{ user.email }</td>
                        <td>{ user.phone }</td>
                        <td className={ `type-badge ${ user.type }` }><span>{ user.type }</span></td>
                        <td></td>
                    </tr>
                )) }
            </table>

            <div className="pagination">
                { [...Array(Math.floor(usersCount / 5))].map((_, index) => (
                    <button className={ `${ index + 1 == page ? 'active' : '' }` } onClick={ () => setPage(index + 1) }>{ index + 1 }</button>
                )) }
            </div>
        </>
    )
}

export default Users