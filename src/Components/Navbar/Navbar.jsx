import React, { useState } from 'react'
import newsLogo from '../../assets/news_app_logo.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'

const Navbar = ({ theme, toggleTheme }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className={`navbar ${theme}`}>

      <img src={newsLogo} alt="logo" className="logo-img" />

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>Sports</li>
        <li>Entertainment</li>
        <li>Health</li>
        <li>Politics</li>
        <li>Forest</li>
      </ul>

      {/* <div className="search">
        <input type="text" placeholder="Search news..." />
        <button>Search</button>
      </div> */}

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className="mode">
        <img
          onClick={toggleTheme}
          src={theme === "dark" ? day : night}
          alt="mode"
          className="logo-img"
        />
      </div>

    </div>
  )
}

export default Navbar