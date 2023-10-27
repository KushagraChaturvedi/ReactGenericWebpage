import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.jsx'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App