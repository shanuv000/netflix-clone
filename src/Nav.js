import React from 'react';
import './Nav.css';

const Nav = () => {

    return (<div className="nav">
        <div className="nav__contents">
            <img className='nav__logo'
                 src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=55"
                 alt="netflix-logo"
            />
            <img className='nav__avatar'
                 src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                 alt="netflix-avatar"
            />
        </div>

    </div>)

}
export default Nav;
