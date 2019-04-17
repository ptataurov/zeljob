import React from 'react'
import PublishContainer from './containers/publish-container'
import PropTypes from 'prop-types'

const Container = ({ body }) => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8">{body}</div>
      </div>
    </div>
  )
}

Container.propTypes = {
  body: PropTypes.element.isRequired
}

const PublishPage = () => {
  return <Container body={<PublishContainer />} />
}

export default PublishPage
