import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import './css/HomePage.style.css'

const HomePage = () => {
  return (
    <div className='home'>

      {/* ===== Header ===== */}
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
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign Up</button>
          </div>
        </div>
      </header>

      {/* ===== Visual ===== */}
      <section className='visual'>
        <div className='inner'>
          <h1>Welcome to User's Space</h1>
          <h4>코드, 경험 그리고 성장의 이야기를 공유합니다.</h4>
        
          <div className='visual-stats'>
            <div className='stat'>
              <FontAwesomeIcon icon={faFolder} /> 127 Posts</div>
            <div className='stat'>
              <FontAwesomeIcon icon={faFolder} /> 12 Projects</div>
          </div>

        </div>
      </section>

      {/* ===== Category ===== */}
      <section className='category'>
        <ul className='category-list'>
          <li>DevOps</li>
          <li>Security</li>
          <li>Database</li>
          <li>Backend</li>
          <li>Frontend</li>
        </ul>
      </section>


      {/* ===== Post ===== */}
      <section className='new'>
        <h2>New Post</h2>
        <div className='new-list'>

        </div>

      </section>


      {/* ===== Footer ===== */}
      <footer>
        <div className='footer-inner'>
          <div>
            <strong>DevBlog</strong>
            <p>개발자를 위한 기술 블로그</p>
          </div>

          <div className='sns'>
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>


    </div>
  )
}


export default HomePage;