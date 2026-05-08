import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

const App = () => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("all");


  // ✅ GLOBAL THEME (default dark)
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const API_KEY = "9ce44910be29437b9de91919c19b287f"

  const fetchNews = async (pageNum, selectedCategory = category) => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${selectedCategory}&page=${pageNum}&pageSize=10&apiKey=${API_KEY}`
      )
      const data = await res.json()

      setArticles((prev) => [...prev, ...data.articles])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(1)
  }, [])

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchNews(nextPage)
  }

  const handleCategory = (cat) => {
  setCategory(cat)
  setPage(1)
  fetchNews(1, cat) // fresh data
}

  return (
    <div className={`app ${theme}`}>

      

      <Navbar 
  theme={theme} 
  toggleTheme={toggleTheme} 
  onCategoryChange={handleCategory}
/>

      <div className="hero-container">
        {articles.map((item, index) => (
          <Hero key={index} data={item} theme={theme} />
        ))}
      </div>

      <Footer loadMore={loadMore} />

    </div>
  )
}

export default App
