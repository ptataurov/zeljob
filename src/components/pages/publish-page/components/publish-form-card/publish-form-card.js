import React from 'react'
import PropTypes from 'prop-types'

const PublishFormCard = ({ title, children }) => {
  return (
    <div className="card mb-4">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <React.Fragment>{children}</React.Fragment>
      </div>
    </div>
  )
}

PublishFormCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
}

export default PublishFormCard
