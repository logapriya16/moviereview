import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='nav-container'>
        <h2>IMDB</h2>
        <input type="search" className='search' />
      <p onClick={()=>navigate('/')} className='nav-item'>Movies</p>
      <p onClick={()=>{navigate('/watchlist')}} className='nav-item'>Watchlist</p>
      <p className='nav-item' onClick={()=>navigate('/stared')}>Stared</p>
    </div>
  )
}
