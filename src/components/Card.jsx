import React from 'react'

export default function Card({ image, title, description, items }) {
  return (
    <div style=
     {{ border: '1px solid #ddd', 
        borderRadius: '18px', 
        padding: '15px', 
        width: '300px', 
        }}>

      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '18px'}} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {items.map((item) => (
          <li> {item}</li>
        ))}
      </ul>
    </div>
  )
}
