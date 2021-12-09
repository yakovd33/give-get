import React from 'react'
import Link from 'next/link';
import AuthHelper from '../../helpers/AuthHelper';

const LoggedAuthButtons = () => {
    const handleLogout = () => {
        AuthHelper.logout();
        location.href = '/';
    }

    return (
        <div>
            <Link href="/find">
                <a className="auth-link filter">קבע שיחה</a>
            </Link>

            <span className="auth-link logout" onClick={ handleLogout }>התנתק/י</span>
        </div>
    )
}

export default LoggedAuthButtons
