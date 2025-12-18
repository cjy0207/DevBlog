import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/login/LoginPage'
import BlogPage from './pages/BlogPage/BlogPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
    </div>
  )
}

export default App
