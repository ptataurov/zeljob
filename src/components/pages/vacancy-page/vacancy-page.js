import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVacancy } from '../../../actions'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Vacancy from './components/vacancy/vacancy'
import VacancyContacts from './components/vacancy-contacts/vacancy-contacts'
import Spinner from '../../spinner/spinner'

const Container = ({ left, right }) => {
  return (
    <div className="vacancy-page app__vacancy-page container">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">{left}</div>
        <div className="col-12 col-xl-3 mt-4 mt-xl-0">{right}</div>
      </div>
    </div>
  )
}

Container.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
}

class VacancyPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
    fetchVacancy: PropTypes.func.isRequired,
    vacancyList: PropTypes.array.isRequired,
    listLoaded: PropTypes.bool.isRequired
  }

  state = {
    vacancy: null
  }

  findVacancy = list => {
    const idx = list.findIndex(
      vacancy => vacancy.id === this.props.match.params.id
    )

    return idx !== -1 ? list[idx] : false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const { fetchVacancy, vacancyList } = this.props
    const vacancy = this.findVacancy(vacancyList)

    if (vacancy) {
      this.setState({ vacancy })
    } else {
      fetchVacancy(this.props.match.params.id)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { vacancyList } = this.props
    const vacancy = this.findVacancy(vacancyList)

    prevState.vacancy !== vacancy && this.setState({ vacancy })
  }

  render() {
    const { listLoaded } = this.props
    const { vacancy } = this.state

    if (vacancy) {
      const { email, position, ...rest } = vacancy

      return (
        <Container
          left={<Vacancy {...rest} position={position} />}
          right={
            <VacancyContacts
              email={email}
              position={position}
              listLoaded={listLoaded}
            />
          }
        />
      )
    }

    return <Spinner />
  }
}

const mapStateToProps = ({ vacancyList, listLoaded }) => ({
  vacancyList,
  listLoaded
})

const mapDispatchToProps = {
  fetchVacancy
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VacancyPage))
