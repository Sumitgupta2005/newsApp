import React from 'react'

const Hero = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data.urlToImage || "https://via.placeholder.com/150"}
        alt="news"
        className="image"
      />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
  )
}


export default Hero
