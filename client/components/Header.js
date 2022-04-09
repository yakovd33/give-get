import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import AuthHelper from '../helpers/AuthHelper';
import NotLoggedAuthButtons from './Header/NotLoggedAuthButtons';
import LoggedAuthButtons from './Header/LoggedAuthButtons';

const Header = () => {
    const [ showMobileNav, setShowMobileNav ] = useState(false);

    return (
        <>
            <div id="header">
                <nav id="main-nav">
                    <div className="container">
                        <div id="nav-wrap">
                            <div id="nav-right">
                                <div id="nav-logo">
                                    <Link href="/">
                                    <a href="/">
                                    GIVE&GET
                                    </a>
                                    </Link>
                                </div>

                                <div id="nav-links">
                                    <Link href="#"><a href="#" className="nav-link active">ראשי</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">אודות</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">הפורום</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">סיפורי הצלחה</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">תקנון</a></Link>

                                    { AuthHelper.isLogged() && AuthHelper.getUser().isAdmin &&
                                        <Link href="/admin"><a href="/admin" className="nav-link">פאנל ניהול</a></Link>
                                    }
                                </div>

                                <div id="mobile-nav-toggler" onClick={ () => setShowMobileNav(!showMobileNav) }><GiHamburgerMenu/></div>
                            </div>

                            <div id="nav-left">
                                <div id="auth-links">
                                    { !AuthHelper.isLogged() && <NotLoggedAuthButtons/>  }
                                    { AuthHelper.isLogged() && <LoggedAuthButtons/>  }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
            { showMobileNav && <div id="nav-links-mobile">
                <Link href="#"><a href="#" className="nav-link active">ראשי</a></Link>
                <Link href="#"><a href="#" className="nav-link">אודות</a></Link>
                <Link href="#"><a href="#" className="nav-link">סיפורי הצלחה</a></Link>
                <Link href="#"><a href="#" className="nav-link">תקנון</a></Link>
                <br />
                { AuthHelper.isLogged() && <span>
                    { !AuthHelper.isLogged() && <NotLoggedAuthButtons/>  }
                    { AuthHelper.isLogged() && <LoggedAuthButtons/>  }
                </span> }
            </div> }
        </>
    );
}
 
export default Header;