import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">{children}</div>
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.array.isRequired
}

export default Container
