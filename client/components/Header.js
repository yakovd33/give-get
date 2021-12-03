import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import AuthHelper from '../helpers/AuthHelper';
import NotLoggedAuthButtons from './Header/NotLoggedAuthButtons';
import LoggedAuthButtons from './Header/LoggedAuthButtons';

const Header = () => {
    return (
        <>
            <div id="header">
                <nav id="main-nav">
                    <div className="container">
                        <div id="nav-wrap">
                            <div id="nav-right">
                                <div id="nav-logo">
                                    GIVE&GET
                                </div>

                                <div id="nav-links">
                                    <Link href="#"><a href="#" className="nav-link active">ראשי</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">אודות</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">סיפורי הצלחה</a></Link>
                                    <Link href="#"><a href="#" className="nav-link">תקנון</a></Link>
                                </div>
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
        </>
    );
}
 
export default Header;