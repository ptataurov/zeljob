import React from 'react'
import { ReactComponent as Emoji } from './alien-emoji.svg'

const NotFound = () => {
  return (
    <h2 className="not-found app__not-found d-flex flex-column align-items-center text-center font-weight-normal text-secondary">
      Страница не найдена <Emoji width="80" className="mt-3" />
    </h2>
  )
}

export default NotFound
