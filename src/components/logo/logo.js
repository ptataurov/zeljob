import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoSVG } from './logo.svg'

const Logo = () => {
  return (
    <Link to="/">
      <LogoSVG />
    </Link>
  )
}

export default Logo
