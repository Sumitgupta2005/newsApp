import React from 'react'
import newsLogo from '../../assets/news_app_logo.png'
import day from '../../assets/day.png'

const Navbar = () => {
  return (
    <div className="navbar">

            <img src={newsLogo} alt="logo" className="logo-img" />

        
        <ul className="nav-links">
            <li>Home</li>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Health</li>
            <li>Politics</li>
            <li>Forest</li>
        </ul>

        <div className="search">
            <input type="text" placeholder="Search news..." />
            <button>Search</button>
        </div>

        <div className="mode">
            <img src={day} alt="logo" className="logo-img" />
        </div>

    </div>
  )
}

export default Navbar
