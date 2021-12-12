import React, { useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat/Chat";

const Layout = ({ children, chat, setChat }) => {
    return ( 
        <div className="website-content">
            <Header/>
                { children }
                <Chat chat={ chat } setChat={ setChat }/>
            <Footer/>
        </div>
    );
}
 
export default Layout;