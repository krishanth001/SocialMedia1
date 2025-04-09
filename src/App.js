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

function App() {

  const [search, setSearch] = useState()

  const [searchResults, setSearchResults] = useState('')
  
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

const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')

useEffect(() => {
  const filteredResults = posts.filter((Post) => ((Post.body).toLowerCase()).includes((search.toLowerCase()) || ((Post.title).toLowerCase()).includes(search.toLowerCase())))
  setSearchResults(filteredResults.reverse())
},[search, posts])

const handleSubmit = (e) => {
  e.preventDefault()
  const id = posts.length ? posts[posts.length-1].id+1 : 1
  const datetime = format(new Date(), `MMMM dd, yyyy pp`)
  const newPost = {id, title: postTitle, datetime, body : postBody}
  const allPosts = [...posts, newPost]
  setPosts(allPosts)
  setPostTitle('')
  setPostBody('')
}


  return (
    <div className="App">
      <Header title= "Krishanth media" />
      <Nav search={search} 
      setSearch={{setSearch}} />
      <Home posts = {searchResults} />
      <NewPost handleSubmit = {handleSubmit} postTitle= {postTitle} setPostTitle = {setPostTitle}
      postBody = {postBody} setPostBody={setPostBody} />
      <Postpage />
      <About />
      <Missing />
      <Footer />

    </div>
  );
}

export default App;
