import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div>
      <h1>404 page not found</h1>
      <p>Try to go <Link to='/'>Home page</Link></p>
    </div>
  )
}
