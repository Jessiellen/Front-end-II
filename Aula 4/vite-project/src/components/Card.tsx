import React from 'react'
import './Card.css' 

interface CardProps {
  title: string
  description: string
  imageUrl: string
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">More</button>
    </div>
  )
}

export default Card
