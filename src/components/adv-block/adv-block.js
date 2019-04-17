import React from 'react'
import slide from './adv.png'

const AdvBlock = () => {
  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a
            href="http://zelsmoke.ru/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src={slide}
              className="d-block w-100"
              alt="Кальян на дом по Зеленограду – zelsmoke.ru"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdvBlock
