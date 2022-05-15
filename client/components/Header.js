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
                                    GIVE&GET
                                    </Link>
                                </div>

                                <div id="nav-links">
                                    <Link href="#"><span className="nav-link active">ראשי</span></Link>
                                    <Link href="#"><span className="nav-link">אודות</span></Link>
                                    <Link href="#"><span className="nav-link">הפורום</span></Link>
                                    <Link href="#"><span className="nav-link">סיפורי הצלחה</span></Link>
                                    <Link href="#"><span className="nav-link">תקנון</span></Link>

                                    { AuthHelper.isLogged()  &&
                                        <Link href="/profile"><span className="nav-link">הפרופיל שלי({ AuthHelper.getUser().fullname })</span></Link>
                                    }

                                    { AuthHelper.isLogged() && AuthHelper.getUser().isAdmin &&
                                        <Link href="/admin"><span className="nav-link">פאנל ניהול</span></Link>
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
                <Link href="#"><span className="nav-link active">ראשי</span></Link>
                <Link href="#"><span className="nav-link">אודות</span></Link>
                <Link href="#"><span className="nav-link">סיפורי הצלחה</span></Link>
                <Link href="#"><span className="nav-link">תקנון</span></Link>

                { AuthHelper.isLogged()  &&
                    <Link href="/profile"><span className="nav-link">הפרופיל שלי({ AuthHelper.getUser().fullname })</span></Link>
                }

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