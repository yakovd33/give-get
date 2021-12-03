import React, { useEffect } from 'react';
import GiveGetSection from "../components/GiveGetSection";
import AuthHelper from '../helpers/AuthHelper';

const Signup = () => {
    useEffect(() => {
        if (AuthHelper.isLogged()) {
            window.location = '/';
        }
    }, []);

    return (
        <div id="main-signup">
            <div id="main-signup-hero">
                <h2 id="signup-hero-title">הרשמה</h2>
            </div>

            <GiveGetSection/>
        </div>
    );
}
 
export default Signup;