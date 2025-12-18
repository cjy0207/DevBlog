import React from 'react'
import './css/HomePage.style.css'

const HomePage = () => {
  return (
    <div className='home'>
      <header>
        <div className='inner'>
          <div className='logo'>DevBlog</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Project</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className='auth'>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </header>

      <section className='visual'></section>
      <section className='category'></section>
      <section className='new'></section>
    </div>
  )
}


export default HomePage;