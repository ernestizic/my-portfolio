import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-not-found'>
        <p>Oops! Page does not exist</p>
        <Link to='/'>Back to home</Link>
    </div>
  )
}

export default NotFound