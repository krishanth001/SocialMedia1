import React from 'react'
import { Link } from "react-router-dom"

export const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
        <form className='Form' onSubmit={(e) => e.preventDefault()}>
            <label searchFor = "search">search</label>
            <input type='text'
            id='input'
            className='input'
            placeholder='Search Posts'
            value={search}set
            onChange={(e) => setSearch(e.target.value)} />
            </form>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/post">Post</Link></li>
            <li><Link to = "/about">About</Link></li>
        </ul>            
    </nav>

  )
}
