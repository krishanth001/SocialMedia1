import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { use, useEffect, useState } from 'react';
import { Post } from './Post';
import { About } from './About';
import { Home } from './Home';
import { Missing } from './Missing';
import { NewPost } from './Newpost';
import { Postpage } from './Postpage';
import { Footer } from './Footer';
import { format } from 'date-fns'
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Made a video about Tesla Q1 results"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM", 
    body: "I attended a DeFi blockchain event"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM", 
    body: "Web3 global summit next week"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "ETH will outperform BTC"
  }
])

const [search, setSearch] = useState('')

const [searchResults, setSearchResults] = useState([])

const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')
const navigate = useNavigate('')

useEffect(() => {
  const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
  setSearchResults(filteredResults.reverse())
},[posts, search])

const handleSubmit = (e) => {
  e.preventDefault()
  const id = posts.length ? posts[posts.length-1].id+1 : 1
  const datetime = format(new Date(), `MMMM dd, yyyy pp`)
  const newPost = {id, title: postTitle, datetime, body : postBody}
  const allPosts = [...posts, newPost]
  setPosts(allPosts)
  setPostTitle('')
  setPostBody('')
  navigate('/') 
}

const handleDelete = (id) => {
  const filterList = posts.filter((post) => post.id !== id)
  setPosts(filterList)
  navigate('/') 
}


  return (
    <div className="App">
      <Header title= "Krish media" />
      <Nav search={search} 
      setSearch={{setSearch}} />
      <Routes>
        <Route path='/' element = {<Home posts = {searchResults} />} />
        <Route path='post'>
          <Route index element = { <NewPost handleSubmit = {handleSubmit} postTitle= {postTitle} setPostTitle = {setPostTitle} 
          postBody = {postBody} setPostBody={setPostBody} />}/>
          <Route path=':id' element = {<Postpage posts = {posts} handleDelete = {handleDelete} />} />
        </Route>  
        <Route path='about' element = {<About />} />
        <Route path='*' element = {<Missing />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
