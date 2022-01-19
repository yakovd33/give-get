import React, { useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat/Chat";

import AuthHelper from '../helpers/AuthHelper';

const Layout = ({ children }) => {
    return ( 
        <div className="website-content">
            <Header/>
                { children }

                { AuthHelper.isLogged() && <Chat/> }
            <Footer/>
        </div>
    );
}
 
export default Layout;