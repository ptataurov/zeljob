import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './vacancy-preview.scss'

import { truncate } from 'lodash'

class VacancyPreview extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.vacancy.id !== this.props.vacancy.id
  }
  render() {
    const {
      id,
      position,
      companyName,
      salary,
      vacancyDesc,
      address,
      publishDate
    } = this.props.vacancy

    return (
      <Link
        to={`/vacancy/${id}`}
        className="vacancy-preview card mb-4"
        data-id={id}
      >
        <div className="card-body">
          <div>
            <h6 className="h4 m-0">{position}</h6>
            <p className="mb-2 text-muted small">{companyName}</p>
            <p className="h6 m-0">{salary}</p>
          </div>
          <hr />
          <p className="m-0">
            {truncate(vacancyDesc, { length: 250, separator: '...' })}
          </p>
          <hr />
          <div className="d-flex flex-wrap justify-content-between text-muted">
            {address && <small>{address}</small>}
            <small className="text-nowrap">{publishDate}</small>
          </div>
        </div>
      </Link>
    )
  }
}

VacancyPreview.propTypes = {
  vacancy: PropTypes.object.isRequired
}

export default VacancyPreview
