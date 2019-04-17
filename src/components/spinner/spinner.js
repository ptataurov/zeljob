import React from 'react'

const Spinner = () => {
  return (
    <div className="spinner app__spinner text-center">
      <div className="spinner-border">
        <span className="sr-only">Загрузка...</span>
      </div>
    </div>
  )
}

export default Spinner
