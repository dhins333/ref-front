import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className = "Header">
            <div className = "Header__container">
                <Link to='/' style={{ textDecoration: 'none' }}><h2 className = "Header__h2">Reference</h2></Link>
            </div>
        </div>
    )
}

export default Header;