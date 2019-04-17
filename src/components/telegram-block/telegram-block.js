import React from 'react'
import './telegram-block.scss'
import { ReactComponent as Logo } from './logo.svg'

const TelegramBlock = () => {
  return (
    <div className="telegram-block app__telegram-block align-self-stretch text-center">
      <div className="container">
        <h5 className="h1 m-0 font-weight-bold">Наш Telegram</h5>
        <p className="h4 my-4 text-muted font-weight-normal">
          Подпишись, чтобы быть в курсе лучших вакансий Зеленограда!
        </p>
        <a href="https://t.me/zeljb" target="_blank noopener noreferrer">
          <Logo width="80" />
        </a>
      </div>
    </div>
  )
}
export default TelegramBlock
