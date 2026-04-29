import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer';

const App = () => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const API_KEY = "9ce44910be29437b9de91919c19b287f"

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  useEffect(() => {
    fetchNews(1);
  }, []);

  const fetchNews = async (pageNum) => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=all&page=${pageNum}&pageSize=10&apiKey=${API_KEY}`
      )
      const data = await res.json()

      setArticles((prev) => [...prev, ...data.articles])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div >

      <Navbar />

      <div className="hero-container">
        {articles.map((item, index) => (
          <Hero key={index} data={item} />
        ))}
      </div>

      <Footer loadMore={loadMore} />

    </div>
  )
}

export default App
