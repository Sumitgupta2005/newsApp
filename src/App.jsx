import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'

const App = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=all&apiKey=9ce44910be29437b9de91919c19b287f"
        );
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div >
      <Navbar />
      <div className="hero-container">
        {articles.map((item, index) => (
          <Hero key={index} data={item} />
        ))}
      </div>

    </div>
  )
}

export default App
