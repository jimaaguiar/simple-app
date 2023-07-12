import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './Pages.css'

function Home() {
  return (
    <div >
      <Header />
      <div className="flex-container">
        <Navbar />
        <div className="content">
          <h2>This is the Home Page</h2>
        </div>
      </div>
    </div>
  )
}

export default Home