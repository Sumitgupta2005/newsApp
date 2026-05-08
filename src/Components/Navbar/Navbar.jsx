// // import React, { useState } from 'react'
// // import newsLogo from '../../assets/news_app_logo.png'
// // import day from '../../assets/day.png'
// // import night from '../../assets/night.png'

// // // const Navbar = ({ theme, toggleTheme }) => {
// //   const Navbar = ({ theme, toggleTheme, onCategoryChange }) => {

// //   const [open, setOpen] = useState(false)

// //   return (
// //     <div className={`navbar ${theme}`}>

// //       <img src={newsLogo} alt="logo" className="logo-img" />

// //       {/* <ul className={`nav-links ${open ? "active" : ""}`}>
// //         <li>Home</li>
// //         <li>Sports</li>
// //         <li>Entertainment</li>
// //         <li>Health</li>
// //         <li>Politics</li>
// //         <li>Forest</li>
// //       </ul> */}

// //       <ul className={`nav-links ${open ? "active" : ""}`}>
// //   <li onClick={() => onCategoryChange("all")}>Home</li>
// //   <li onClick={() => onCategoryChange("sports")}>Sports</li>
// //   <li onClick={() => onCategoryChange("entertainment")}>Entertainment</li>
// //   <li onClick={() => onCategoryChange("health")}>Health</li>
// //   <li onClick={() => onCategoryChange("politics")}>Politics</li>
// //   <li onClick={() => onCategoryChange("forest")}>Forest</li>
// // </ul>

// //       {/* <div className="search">
// //         <input type="text" placeholder="Search news..." />
// //         <button>Search</button>
// //       </div> */}

// //       <div className="menu-icon" onClick={() => setOpen(!open)}>
// //         ☰
// //       </div>

// //       <div className="mode">
// //         <img
// //           onClick={toggleTheme}
// //           src={theme === "dark" ? day : night}
// //           alt="mode"
// //           className="logo-img"
// //         />
// //       </div>

// //     </div>
// //   )
// // }

// // export default Navbar

// import React, { useEffect, useState } from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero'
// import Footer from './Components/Footer'

// const App = () => {

//   const [articles, setArticles] = useState([])
//   const [page, setPage] = useState(1)
//   const [category, setCategory] = useState("general")

//   const [theme, setTheme] = useState("dark")

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark")
//   }

//   const API_KEY = "YOUR_API_KEY"

//   // ✅ USE CORRECT API
//   const fetchNews = async (pageNum, selectedCategory = category) => {
//     try {
//       const res = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&page=${pageNum}&pageSize=10&apiKey=${API_KEY}`
//       )

//       const data = await res.json()

//       // ✅ IMPORTANT FIX
//       if (pageNum === 1) {
//         setArticles(data.articles) // replace
//       } else {
//         setArticles((prev) => [...prev, ...data.articles]) // append
//       }

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchNews(1)
//   }, [])

//   const loadMore = () => {
//     const nextPage = page + 1
//     setPage(nextPage)
//     fetchNews(nextPage)
//   }

//   const handleCategory = (cat) => {
//     setCategory(cat)
//     setPage(1)
//     fetchNews(1, cat)
//   }

//   return (
//     <div className={`app ${theme}`}>

//       <Navbar 
//         theme={theme} 
//         toggleTheme={toggleTheme} 
//         onCategoryChange={handleCategory}
//       />

//       <div className="hero-container">
//         {articles.map((item, index) => (
//           <Hero key={item.url} data={item} theme={theme} />
//         ))}
//       </div>

//       <Footer loadMore={loadMore} />

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import newsLogo from '../../assets/news_app_logo.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'

const Navbar = ({ theme, toggleTheme, onCategoryChange }) => {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("general") // 🔥 track active tab

  const handleClick = (cat) => {
    setActive(cat)
    onCategoryChange(cat)
    setOpen(false) // close menu on mobile
  }

  return (
    <div className={`navbar ${theme}`}>

      {/* LOGO */}
      <img src={newsLogo} alt="logo" className="logo-img" />

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>

        <li 
          className={active === "general" ? "active-tab" : ""}
          onClick={() => handleClick("general")}
        >
          Home
        </li>

        <li 
          className={active === "sports" ? "active-tab" : ""}
          onClick={() => handleClick("sports")}
        >
          Sports
        </li>

        <li 
          className={active === "entertainment" ? "active-tab" : ""}
          onClick={() => handleClick("entertainment")}
        >
          Entertainment
        </li>

        <li 
          className={active === "health" ? "active-tab" : ""}
          onClick={() => handleClick("health")}
        >
          Health
        </li>

        <li 
          className={active === "business" ? "active-tab" : ""}
          onClick={() => handleClick("business")}
        >
          Business
        </li>

        <li 
          className={active === "technology" ? "active-tab" : ""}
          onClick={() => handleClick("technology")}
        >
          Tech
        </li>

      </ul>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* THEME TOGGLE */}
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