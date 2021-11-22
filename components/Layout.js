import React, { useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div className="website-content">
            <Header/>
                { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;