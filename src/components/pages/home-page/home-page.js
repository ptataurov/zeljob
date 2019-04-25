import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  fetchVacancyList,
  setListLoaded,
  fetchNextPage,
  onSearch
} from '../../../actions'
import Header from '../../header/header'
import Container from '../../container/container'
import SearchPanel from '../../search-panel/search-panel'
import AdvBlock from '../../adv-block/adv-block'
import VacancyList from '../../vacancy-list/vacancy-list'
import TelegramBlock from '../../telegram-block/telegram-block'

class HomePage extends Component {
  static propTypes = {
    setListLoaded: PropTypes.func.isRequired,
    fetchVacancyList: PropTypes.func.isRequired,
    listLoaded: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { listLoaded, fetchVacancyList, setListLoaded } = this.props

    if (!listLoaded) {
      fetchVacancyList()
      setListLoaded(true)
    }
  }

  render() {
    console.log(this.props)

    const { onSearch } = this.props

    return (
      <React.Fragment>
        <Container>
          <Header />
          <SearchPanel onSearch={onSearch} />
          <AdvBlock />
          <VacancyList />
        </Container>
        <TelegramBlock />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ listLoaded }) => ({ listLoaded })
const mapDispatchToProps = {
  fetchVacancyList,
  setListLoaded,
  fetchNextPage,
  onSearch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
