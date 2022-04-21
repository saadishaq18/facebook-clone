import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import CasinoIcon from '@mui/icons-material/Casino';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png' />
            <div className='header_input'>
                <SearchIcon/>
                <input placeholder='Search Facebook' type="text" />
            </div>
        </div>
        <div className='header_center'>
            <div className='header_option header_option--active'><HomeIcon fontSize='large'/></div>
            <div className='header_option'><OndemandVideoIcon fontSize='large'/></div>
            <div className='header_option'><StorefrontIcon fontSize='large'/></div>
            <div className='header_option'><GroupsIcon fontSize='large' /></div>
            <div className='header_option'><CasinoIcon  fontSize='large'/></div>
            
            
            
            
            

        </div>
        <div className='header_right'>
            <div className='header_info'>
                <Avatar fontSize='large'/>
                <h4>Saad</h4>
            </div>
            <IconButton className='right_icon'>
                <MenuIcon fontSize='large'/>
                
            </IconButton>
            <IconButton className='right_icon'> 
                <MessageIcon fontSize='large'/>
                
            </IconButton>
            <IconButton className='right_icon'>
                <NotificationsIcon fontSize='large'/>
            </IconButton>
            <IconButton className='right_icon'>
                <ArrowDropDownIcon fontSize='large'/>
            </IconButton>
            

        </div>

    </div>
  )
}

export default Header