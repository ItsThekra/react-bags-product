import React from 'react'

export default function Navbar() {
  return (
    <nav 
    style={{
        padding: '15px',
        borderBottom: '1px solid #ccc',
        display:'flex',
        justifyContent: 'space-between'
    }}>
        <h2>Bag's Store</h2>
        <ul style={{display: 'flex' , gap: '90px'}}>
            <li style={{textDecoration: 'none', listStyle: 'none', cursor: 'pointer'}}>Home</li>
            <li style={{textDecoration: 'none', listStyle: 'none', cursor: 'pointer'}}>About us</li>
        </ul>
    </nav>
  )
}
