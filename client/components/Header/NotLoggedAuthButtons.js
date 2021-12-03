import React from 'react'
import Link from 'next/link';

const NotLoggedAuthButtons = () => {
    return (
        <div>
            <Link href="/login">
                <a className="auth-link login">התחברות</a>
            </Link>

            <Link href="/signup">
                <a className="auth-link">הרשמה</a>
            </Link>
        </div>
    )
}

export default NotLoggedAuthButtons
