import React from 'react'
import Link from 'next/link';

const LoggedAuthButtons = () => {
    return (
        <div>
            <Link href="/filter">
                <a className="auth-link filter">קבע שיחה</a>
            </Link>
        </div>
    )
}

export default LoggedAuthButtons
