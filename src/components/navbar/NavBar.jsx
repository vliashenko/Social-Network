import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

import {
    HomeOutlined,
    DarkModeOutlined,
    GridViewOutlined,
    SearchOutlined,
    PersonOutlined,
    EmailOutlined,
    NotificationsOutlined,
    WbSunnyOutlined
} from '@mui/icons-material';

import './NavBar.scss';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {

    const {darkMode, toggle} = useContext(DarkModeContext);
    const { currentUser: {name, profilePic} } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span>
                        skannet.
                    </span>
                </Link>
                    <HomeOutlined/>
                    {darkMode ? <WbSunnyOutlined onClick={toggle}/> : <DarkModeOutlined onClick={toggle}/>}
                    <GridViewOutlined/>
                    <div className="search">
                        <SearchOutlined/>
                        <input type="text" placeholder='Search...' />
                    </div>
            </div>
            <div className="right">
                <PersonOutlined/>
                <EmailOutlined/>
                <NotificationsOutlined/>
                <div className="user">
                    <img src={profilePic} alt="userpic" />
                    <span>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;