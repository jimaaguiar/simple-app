import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './Pages.css'

function NoPage() {
  return (
    <div >
      <Header />
      <div className="flex-container">
        <Navbar />
        <div className="content">
          <h2>Page not found</h2>
        </div>
      </div>
    </div>
    
  )
}

export default NoPage