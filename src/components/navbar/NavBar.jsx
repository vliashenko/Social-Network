import React from 'react';
import {
    HomeOutlined,
    DarkModeOutlined,
    GridViewOutlined,
    SearchOutlined,
    PersonOutlined,
    EmailOutlined,
    NotificationsOutlined
} from '@mui/icons-material';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span>
                        skannet.
                    </span>
                </Link>
                    <HomeOutlined/>
                    <DarkModeOutlined/>
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
                    <img src="https://images.pexels.com/photos/8396725/pexels-photo-8396725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userpic" />
                    <span>James Cosby</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;