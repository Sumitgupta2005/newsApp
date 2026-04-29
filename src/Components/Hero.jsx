import React from 'react'

const Hero = ({ data, theme }) => {
  return (
    <div className={`card ${theme}`}>
      <img
        src={data.urlToImage || "https://via.placeholder.com/150"}
        alt="news"
        className="image"
      />
      <h4>{data.title}</h4>
      <p>{data.description}</p>

      <a href={data.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  )
}

export default Hero