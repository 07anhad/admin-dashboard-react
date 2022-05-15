import React from 'react';
import "./sidebar.scss"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
      <div className="sidebar">
          <div className="top">
            <span className="logo">deQUEUE</span>
          </div>
          <hr />
          <div className="center">
              <ul>
                  
                  <p className="title">MAIN</p>
                  <li>
                    <GridViewOutlinedIcon className="icon"/>
                    <span>Dashboard</span>
                  </li>  
                  <p className="title">LISTS</p>
                  <li>
                    <PeopleOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                  </li>  
                  <li>
                    <DeliveryDiningOutlinedIcon className="icon"/>
                    <span>Orders</span>
                  </li>  
                  <p className="title">UPDATES</p>
                  <li>
                    <AssessmentOutlinedIcon className="icon"/>
                    <span>Stats</span>
                  </li>  
                  <li>
                    <NotificationsActiveOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                  </li>  
                  <p className="title">SERVICES</p>
                  <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                  </li>  
                  <li>
                    <AppSettingsAltOutlinedIcon className="icon"/>
                    <span>Logs</span>
                  </li>  
                  <p className="title">USER PROFILE</p>
                  <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                  </li>  
                  <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                  </li>  
                  <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                  </li>  
            </ul>
          </div>
          <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
    </div>
  )
}

export default Sidebar