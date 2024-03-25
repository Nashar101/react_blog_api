import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from "./features/posts/PostList.jsx"
function App() {

  return (

      <>
          <h1>React on Rails Blog</h1>
          <p>Find this layout in client/src/App.jsx</p>
          <br/>
          <PostsList/>
      </>
  )
}

export default App
