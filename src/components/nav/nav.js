import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'

const Nav = () => {
  return (
    <nav className="navbar navbar-light container flex-column flex-md-row align-items-stretch align-items-md-center py-4">
      <Logo />
      <ul className="navbar-nav mt-2 mt-md-0 ml-auto order-1 order-md-0">
        <li className="nav-item">
          <a className="nav-link" href="mailto:hello@zeljob.ru">
            hello@zeljob.ru
          </a>
        </li>
      </ul>
      <Link
        className="btn btn-primary mt-4 mt-md-0 ml-md-4 order-0 order-md-1"
        to="/publish"
      >
        Опубликовать вакансию
      </Link>
    </nav>
  )
}

export default Nav
