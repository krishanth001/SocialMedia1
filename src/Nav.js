import React from 'react'

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
            <li><link to = "/">Home</link></li>
            <li><link to = "/post">Post</link></li>
            <li><link to = "/about">About</link></li>
            </ul>            
    </nav>

  )
}
