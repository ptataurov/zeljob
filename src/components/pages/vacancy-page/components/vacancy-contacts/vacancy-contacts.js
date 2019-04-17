import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const VacancyContacts = ({ email, listLoaded, position }) => {
  return (
    <React.Fragment>
      <div className="card">
        <h5 className="card-header">Контакты</h5>
        <div className="card-body">
          <p className="card-text mb-0">Резюме присылать на почту:</p>
          <a href="/" rel="nofollow" className="d-inline-block my-3">
            {email}
          </a>
          <p className="card-text mb-0">
            с пометкой “Вакансия {position} на zeljob.ru”.
          </p>
        </div>
      </div>
      <Link
        className="btn btn-secondary btn-block mt-3"
        to={{
          pathname: '/'
        }}
      >
        {listLoaded ? 'Назад' : 'На главную'}
      </Link>
    </React.Fragment>
  )
}

VacancyContacts.propTypes = {
  email: PropTypes.string.isRequired,
  listLoaded: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired
}

export default VacancyContacts
