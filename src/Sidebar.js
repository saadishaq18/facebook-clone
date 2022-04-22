import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookIcon from '@mui/icons-material/Book';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Sidebar() {
  return (
      <div className='sidebar'>
          <SidebarRow src='https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg' title="Saad Ishaq" />
          <SidebarRow Icon={PeopleAltIcon} title="Friends" />
          <SidebarRow Icon={BookIcon} title="Saved" />
          <SidebarRow Icon={OndemandVideoIcon}title="Watch" />
          <SidebarRow Icon={GroupsIcon} title="Groups" />
          <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
          <SidebarRow Icon={ArrowDropDownIcon} title="See more"/>
      </div>
    

  )
}

export default Sidebar