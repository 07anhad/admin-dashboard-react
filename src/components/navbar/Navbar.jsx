import { LanguageOutlined, SearchOutlined, DarkModeOutlined, LightModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutline, ListOutlined } from '@mui/icons-material';
import SelectInput from '@mui/material/Select/SelectInput';
import { MenuItem } from '@mui/material';
import React from 'react';
import "./navbar.scss"

const Navbar = () => {
  const [language, setLanguage] = React.useState(1);
  const updateLang = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlined className='icon-search'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon'/>
            <div className='language'>
              <SelectInput value={language}
                displayEmpty
                onChange={updateLang}
              >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={1}>English</MenuItem>
                <MenuItem value={2}>Hindi</MenuItem>
              </SelectInput>
            </div>
          </div>
          <div className="item">
            <DarkModeOutlined className='icon'/>
          </div>
          <div className="item">
            <LightModeOutlined className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='icon'/>
          </div>
          <div className="item">
            <ChatBubbleOutline className='icon'/>
          </div>
          <div className="item">
            <ListOutlined className='icon'/>
          </div>
          <div className="item">
            <img
              src="../images/avatar.png" alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar