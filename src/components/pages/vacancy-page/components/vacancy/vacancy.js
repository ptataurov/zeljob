import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import './vacancy.scss'

const Vacancy = props => {
  const {
    companyName,
    site,
    aboutCompany,
    position,
    salary,
    address,
    vacancyDesc,
    employment,
    experience,
    education,
    resps,
    skills,
    publishDate
  } = props

  return (
    <div className="vacancy card">
      <div className="card-body">
        <div>
          <h5 className="h3 card-title mb-1">{position}</h5>
          <p className="card-text text-muted mb-0">{companyName}</p>
          {site && (
            <a href={site} target="_blank" rel="nofollow noopener noreferrer">
              Сайт
            </a>
          )}

          <p className="h4 card-text mt-3 mb-2">{salary}</p>
          <ul className="list-unstyled text-muted">
            <li>{employment}</li>
            <li>Опыт работы {experience}</li>
            <li>Образование {education}</li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="mb-5">
          <h6 className="h5 mb-3">Описание вакансии</h6>
          <p className="card-text vacancy-page__p pre-wrap">{vacancyDesc}</p>
        </div>
        <div className="mb-5">
          <h6 className="h5 mb-3">О компании</h6>
          <p className="card-text vacancy-page__p pre-wrap">{aboutCompany}</p>
        </div>
        {Boolean(resps.length) && (
          <div className="mb-5">
            <h6 className="h5 mb-3">Обязанности</h6>
            <ul className="vacancy__list">
              {resps.map(item => (
                <li className="vacancy__list-item" key={uniqid()}>
                  <span className="vacancy__list-item-span">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {Boolean(skills.length) && (
          <div className="mb-5">
            <h6 className="h5 mb-3">Необходимые навыки</h6>
            <ul className="vacancy__list">
              {skills.map(item => (
                <li className="vacancy__list-item" key={uniqid()}>
                  <span className="vacancy__list-item-span">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr />
        <div className="d-flex justify-content-between flex-wrap">
          {address && <p className="card-text text-muted mb-0">{address}</p>}
          <p className="card-text text-muted mb-0">{publishDate}</p>
        </div>
      </div>
    </div>
  )
}

Vacancy.propTypes = {
  companyName: PropTypes.string.isRequired,
  site: PropTypes.string,
  aboutCompany: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  address: PropTypes.string,
  vacancyDesc: PropTypes.string.isRequired,
  employment: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  resps: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  publishDate: PropTypes.string.isRequired
}

export default Vacancy
