import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchNextPage, updateScrollTopListPosition } from '../../actions'
import VacancyPreview from '../vacancy-preview/vacancy-preview'
import BtnUp from '../btn-up/btn-up'
import Spinner from '../spinner/spinner'

import { ReactComponent as FindEmoji } from './find-emoji.svg'

const getVacancyCountStr = count => {
  const digit = count > 20 ? Number(count.toString().slice(-1)) : count

  if (digit === 1) return `${count} вакансия`
  if (digit <= 4 && digit !== 0) return `${count} вакансии`

  return `${count} вакансий`
}

class VacancyList extends Component {
  static propTypes = {
    vacancyList: PropTypes.array.isRequired,
    fetchNextPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    vacancyCount: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    searchInput: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    updateScroll: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.scrollTo(0, this.props.top)
  }

  componentWillUnmount() {
    this.props.updateScroll(window.pageYOffset)
  }
  render() {
    const {
      vacancyList,
      fetchNextPage,
      currentPage,
      loading,
      vacancyCount,
      searchInput,
      totalPages
    } = this.props

    if (!loading && vacancyCount === 0) {
      return (
        <h2 className="my-5 text-center d-flex flex-column align-items-center text-center font-weight-normal text-secondary">
          Вакансий не найдено
          <FindEmoji width="80" className="mt-3" />
        </h2>
      )
    }

    return (
      <div className="vacancy-list app__vacancy-list">
        <p className="mr-1 mb-2 text-muted text-right">
          {getVacancyCountStr(vacancyCount)}
        </p>
        <div className="vacancy-list__body">
          {vacancyList.map(vacancy => (
            <VacancyPreview vacancy={vacancy} key={vacancy.id} />
          ))}
        </div>
        <div className="vacancy-list__footer text-center">
          {loading ? (
            <Spinner />
          ) : currentPage === totalPages ? null : (
            <button
              className="btn btn-lg btn-outline-success"
              onClick={() => fetchNextPage(searchInput, currentPage)}
              disabled={loading}
            >
              Загрузить еще
            </button>
          )}
        </div>
        <BtnUp />
      </div>
    )
  }
}

const mapStateToProps = ({
  vacancyList,
  currentPage,
  loading,
  vacancyCount,
  searchInput,
  totalPages,
  scrollTopListPosition
}) => ({
  vacancyList,
  currentPage,
  loading,
  vacancyCount,
  searchInput,
  totalPages,
  top: scrollTopListPosition
})

const mapDispatchToProps = {
  fetchNextPage,
  updateScroll: updateScrollTopListPosition
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VacancyList)
